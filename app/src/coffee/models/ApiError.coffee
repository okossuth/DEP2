define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    _gettersNames: [
      'resp'
      'obj'
      'method'
      'url'
    ]

    localStorageOnly: true

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true