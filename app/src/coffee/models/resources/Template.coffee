define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    typeName: 'template'

    _gettersNames: [
      'pk'
      'name'
      'repeat'
      'resource_needs'
    ]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true