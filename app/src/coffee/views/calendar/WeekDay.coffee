define [
  'views/calendar/Day',
  'views/resources/ResourceBase',

  'ovivo'
], (Day, ResourceBase) ->
  ResourceBase.extend _.extend {}, Day, {}