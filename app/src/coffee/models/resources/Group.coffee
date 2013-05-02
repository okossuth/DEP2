define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase, View, EditView, validators) ->
  ResourceBase.extend
    typeName: 'group'

    _gettersNames: [
      'pk'
      'name'
    ]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true