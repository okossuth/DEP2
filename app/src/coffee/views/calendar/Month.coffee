define [
  'views/calendar/DaysCollector',
  'views/resources/ResourceBase',

  'ovivo'
], (DaysCollector, ResourceBase) ->
  ResourceBase.extend _.extend {}, DaysCollector,
    common: {}

    template: Handlebars.templates['calendarMonth']
    groupTemplate: Handlebars.templates['calendarMonth_group']

    events: {}

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