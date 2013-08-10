define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'name'
      'pk'
    ]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true