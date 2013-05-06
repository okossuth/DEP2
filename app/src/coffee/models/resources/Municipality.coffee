define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    typeName: 'municipality'

    _gettersNames: [
      'pk'
      'name'
    ]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true