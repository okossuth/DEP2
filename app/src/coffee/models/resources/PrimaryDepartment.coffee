define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    typeName: 'primaryDepartment'

    _gettersNames: [
      'pk'
      'name'
      'municipality'
    ]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true