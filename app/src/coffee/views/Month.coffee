define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'

    template: Handlebars.templates['calendarMonth']
    groupTemplate: Handlebars.templates['calendarMonth_group']

    events: {}

    show: () -> @$el.removeClass 'hide'
    hide: () -> @$el.addClass 'hide'

    month: () -> ovivo.config.MONTHS[@model.month()]

    rows: () ->
      _.map @model.weeks, (week) ->
        cells: week

    postRender: () -> 
      @dayElements = @$('.days-container .week-row > td')

      @hide()

    initialize: () ->
      @proxyCall 'initialize', arguments

      true