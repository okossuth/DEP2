define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    typeName: 'period'

    _gettersNames: [
      'pk'
      'start_date'
      'end_date'
      'templates'
    ]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true