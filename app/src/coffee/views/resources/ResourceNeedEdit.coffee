define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'
    className: 'resource-need element'

    template: Handlebars.templates['resourceNeedEdit']
    groupTemplate: Handlebars.templates['resourceNeedEdit_group']

    events:
      'click li.weekday': 'weekdayClick'
      'click .edit-button': 'edit'
      'click .remove-button': 'processRemove'

    weekdayClick: (e) ->
      _item = $(e.target).closest('.weekday')
      _i = _item.index()

      @model.processWeek (_i), @model.weekdaysHash[_i]

    edit: () -> 
      ovivo.desktop.popups.editPopupResourceNeed.show()
      ovivo.desktop.popups.editPopupResourceNeed.setModel @model

    _getDateStr: (_date) ->
      if _date?
        "#{_date.getDate()}. #{ovivo.config.MONTHS[_date.getMonth()].toLowerCase().slice(0, 3)}"
      else ''

    start_date: () -> if (_start_date = @model.start_date())? then @_getDateStr new Date Date.parse _start_date else ''
    end_date: () -> 
      if @model.end_date() is @model.start_date() then ''
      else if (_end_date = @model.end_date())? then " – #{@_getDateStr new Date Date.parse _end_date}" else ' – \u221E'

    _repeatStrs: [gettext('Every other week').toLowerCase(), gettext('Every second week').toLowerCase(), gettext('Every third week').toLowerCase(), gettext('Every fourth week').toLowerCase()]

    repeat: () -> @_repeatStrs[@model.repeat() - 1]

    renderSkill: () ->
      @$('.skill-value').html ovivo.desktop.resources.skills.get(@model.skill())?.name()

    postRender: () ->
      @$('.columns.weekdays > li').each (i, elem) =>
        if @model.weekdaysHash[i] is true
          $(elem).addClass 'checked'

        else
          $(elem).removeClass 'checked'

      ovivo.desktop.resources.skills.def.done _.bind @renderSkill, @

    initialize: () ->
      @proxyCall 'initialize', arguments

      @weekDays = @$('ul.weekdays')

      true
