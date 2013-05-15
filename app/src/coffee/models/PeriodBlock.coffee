define [
  'views/PeriodBlock',

  'models/resources/ResourceBase',

  'ovivo'
], (View, ResourceBase) ->
  ResourceBase.extend
    idAttribute: 'cid'

    _gettersNames: [
      'start_time'
      'end_time'
      'skill'
      'employee_type'
      'num_employees'
      'date'
      'model'
      'pk'
    ]

    initialize: () ->
      @View = View

      @proxyCall 'initialize', arguments

      true