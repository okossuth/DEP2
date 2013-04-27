define [
  'collections/calendar/DaysCollectors',

  'models/calendar/Week',
  'models/calendar/WeekDay',

  'ovivo'
], (DaysCollectors, Model, WeekDay) ->
  DaysCollectors.extend
    model: Model
    DayModel: WeekDay

    initialize: (models, options) ->
      @proxyCall 'initialize', arguments

      true