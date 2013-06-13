define [
  'models/resources/ResourceBase',

  'views/period/GroupFilter',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'pk'
      ['name', 'root']
    ]

    initialize: (attrs, options) ->
      @set 'pk', attrs.root.pk()

      @count = 1

      @View = View

      @proxyCall 'initialize', arguments

      true