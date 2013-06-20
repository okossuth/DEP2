define [
  'models/pages/PageBase',

  'views/pages/Feedback/Page',

  'ovivo'
], (PageBase, View) ->
  PageBase.extend
    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      true