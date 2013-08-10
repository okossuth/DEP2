define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    _gettersNames: [
      'name'
      'municipality'
      'pk'
    ]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true