define [
  'views/calendar/DaysCollector',
  'views/resources/ResourceBase',

  'ovivo'
], (DaysCollector, ResourceBase) ->
  ResourceBase.extend _.extend {}, DaysCollector,
    common: {}

    template: Handlebars.templates['calendarWeek']
    groupTemplate: Handlebars.templates['calendarWeek_group']

    events: {}

    days: () -> @model.days

    initialize: () ->
      @proxyCall 'initialize', arguments

      true