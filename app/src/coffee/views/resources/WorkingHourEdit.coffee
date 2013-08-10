define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'
    className: 'working-hour element'

    template: Handlebars.templates['workingHourEdit']
    groupTemplate: Handlebars.templates['workingHourEdit_group']

    events:
      'click li.weekday': 'weekdayClick'
      'click .edit-button': 'edit'
      'click .remove-button': 'processRemove'

    weekdayClick: (e) ->
      _item = $(e.target).closest('.weekday')
      _i = _item.index()

      @model.processWeek (_i), @model.weekdaysHash[_i]

    edit: () -> 
      if @model.isSingle() is true
        _mode = 'edit-single'

      else
        _mode = 'edit'

      ovivo.desktop.popups.editPopupWorkingHour.show()
      ovivo.desktop.popups.editPopupWorkingHour.edit @model, _mode

    _getDateStr: (_date) ->
      if _date?
        "#{_date.getDate()}. #{ovivo.config.MONTHS[_date.getMonth()].toLowerCase().slice(0, 3)}"
      else ''

    start_date: () -> if (_start_date = @model.start_date())? then @_getDateStr new Date Date.parse _start_date else ''
    end_date: () -> 
      if @model.end_date() is @model.start_date() then ''
      else if (_end_date = @model.end_date())? then " – #{@_getDateStr new Date Date.parse _end_date}" else ' – \u221E'

    available: () -> if @model.available() is true then gettext('Available') else gettext('Unavailable')

    _repeatStrs: [gettext('Every other week').toLowerCase(), gettext('Every second week').toLowerCase(), gettext('Every third week').toLowerCase(), gettext('Every fourth week').toLowerCase()]

    repeat: () -> @_repeatStrs[@model.repeat() - 1]

    postRender: () ->
      @$('.columns.weekdays > li').each (i, elem) =>
        if @model.weekdaysHash[i] is true
          $(elem).addClass 'checked'

        else
          $(elem).removeClass 'checked'

    initialize: () ->
      @proxyCall 'initialize', arguments

      @weekDays = @$('ul.weekdays')

      true
