define [
  'models/resources/ResourceBase',

  'views/resources/Comment',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'commenter'
      'pub_date'
      'comment'
      'reply_to'
      'pk'
    ]

    initialize: (attrs, options) ->
      @View = View
      
      @proxyCall 'initialize', arguments

      true