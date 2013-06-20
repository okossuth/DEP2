define [
  'models/pages/PageBase',

  'views/pages/Notifications/Page',

  'ovivo'
], (PageBase, View) ->
  PageBase.extend
    popup: true

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      true