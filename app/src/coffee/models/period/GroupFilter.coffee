define [
  'models/resources/ResourceBase',

  'views/period/GroupFilter',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      ['pk', 'root']
      ['name', 'root']
    ]

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      true