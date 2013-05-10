define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    typeName: 'period'

    localStorageOnly: true

    _gettersNames: [
      'pk'
      'start_date'
      'end_date'
      'templates'
      'primary_department'
    ]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true