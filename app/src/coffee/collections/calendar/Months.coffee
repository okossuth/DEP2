define [
  'collections/calendar/DaysCollectors',

  'models/calendar/Month',
  'models/calendar/MonthDay',

  'ovivo'
], (DaysCollectors, Model, MonthDay) ->
  DaysCollectors.extend
    model: Model
    DayModel: MonthDay

    initialize: (models, options) ->
      @proxyCall 'initialize', arguments

      true