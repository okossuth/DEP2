define [
  'models/resources/ResourceBase',

  'views/resources/Notification',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'timestamp'
      'link'
      'summary'
      'event_id'
      'read'
      'last'
      'pk'
    ]

    initialize: (attrs, options) ->
      @View = View
      
      @proxyCall 'initialize', arguments

      true