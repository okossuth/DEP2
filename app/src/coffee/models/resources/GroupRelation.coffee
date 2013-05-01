define [
  'models/resources/ResourceBase',

  'ovivo-ella'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'checked'
      'parent'
      'children'
      'primary_department'
      'pk'
    ]

    initialize: (attrs, options) ->
      @set 'children', []
      @proxyCall 'initialize', arguments

      true