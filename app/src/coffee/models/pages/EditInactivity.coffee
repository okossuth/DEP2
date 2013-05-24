define [
  'models/pages/PageBase',

  'views/pages/EditInactivity/Page',

  'ovivo'
], (PageBase, View) ->
  PageBase.extend
    popup: true

    initialize: (attrs, options) ->
      @View = View
      
      @proxyCall 'initialize', arguments
      
      true