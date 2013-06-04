define [
  'models/resources/ResourceBase',

  'views/period/EventUser',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'event'
      'name'
      'type'
      ['pk', 'event']
    ]

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      true