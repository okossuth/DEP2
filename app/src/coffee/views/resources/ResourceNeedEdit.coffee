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
      ovivo.desktop.popups.editPopupResourceNeed.edit @model

    templates: () ->
      _templates = @model.templates()

      if typeof _templates is 'object'
        _.map _.keys(_templates), (id) -> ovivo.desktop.resources.templates.get(id)

      else
        null

    renderSkill: () ->
      @$('.skill-value').html ovivo.desktop.resources.skills.get(@model.skill())?.name()

    renderPD: () ->
      @$('.pd-value').html ovivo.desktop.resources.primaryDepartments.get(@model.primary_department())?.name()

    renderTemplates: () ->
      _templates = @templates()

      if (_templates isnt null) and (_templates.length > 0)
        @$('.templates-names span').html _.map(@templates(), (template) -> template.name()).join ', '

      else
        @$('.templates-names').addClass 'empty'

    postRender: () ->
      @$('.columns.weekdays > li').each (i, elem) =>
        if @model.weekdaysHash[i] is true
          $(elem).addClass 'checked'

        else
          $(elem).removeClass 'checked'

      @$('.resource-need-check')[0].checked = @checked()

      ovivo.desktop.resources.skills.def.done _.bind @renderSkill, @
      ovivo.desktop.resources.primaryDepartments.def.done _.bind @renderPD, @

      ovivo.desktop.resources.templates.def.done _.bind @renderTemplates, @

    initialize: () ->
      @proxyCall 'initialize', arguments

      @model.on 'change:templates', () => @render()

      @weekDays = @$('ul.weekdays')

      true