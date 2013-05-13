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

    changePD: () ->
      @set 'resource_needs', []

    initialize: (attrs, options) ->
      @View = View

      @on 'change:primary_department', @changePD, @

      @proxyCall 'initialize', arguments

      true