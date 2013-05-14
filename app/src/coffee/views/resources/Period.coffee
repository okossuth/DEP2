define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'
    className: 'period'

    template: Handlebars.templates['period']
    groupTemplate: Handlebars.templates['period_group']

    events:
      'click': 'processClick'

    _getDateStr: (_date) ->
      if _date?
        "#{_date.getDate()}. #{ovivo.config.MONTHS[_date.getMonth()].toLowerCase().slice(0, 3)}"
      else ''

    start_date: () -> @_getDateStr new Date Date.parse @model.start_date()
    end_date: () -> @_getDateStr new Date Date.parse @model.end_date()

    renderTemplates: () ->
      @$('.templates-list').html _.map(@templates(), (id) -> ovivo.desktop.resources.templates.get(id).name()).join ', '

    renderGroups: () ->
      @$('.groups-list').html _.map(@groups(), (id) -> ovivo.desktop.resources.groups.get(id).name()).join ', '

    postRender: () ->
      ovivo.desktop.resources.templates.def.done _.bind @renderTemplates, @
      ovivo.desktop.resources.groups.def.done _.bind @renderGroups, @

    processClick: () ->
      ovivo.desktop.popups.editPopupPeriod.show()
      ovivo.desktop.popups.editPopupPeriod.setModel @model

    initialize: () ->
      @proxyCall 'initialize', arguments

      true