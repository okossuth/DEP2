define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase, View, EditView, validators) ->
  ResourceBase.extend
    typeName: 'skill'

    _gettersNames: [
      'pk'
      'name'
      'primary_department'
      'type'
    ]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true