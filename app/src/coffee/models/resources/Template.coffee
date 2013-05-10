define [
  'models/resources/ResourceBase',

  'views/resources/Template'

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    typeName: 'template'

    localStorageOnly: true

    _gettersNames: [
      'pk'
      'name'
      'repeat'
      'resource_needs'
      'primary_department'
    ]

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      true