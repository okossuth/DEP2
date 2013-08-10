define [
  'models/calendar/Day',
  'models/resources/ResourceBase',

  'views/calendar/MonthDay',

  'ovivo'
], (Day, ResourceBase, View) ->
  ResourceBase.extend _.extend {}, Day,
    View: View