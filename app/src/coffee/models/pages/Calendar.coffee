define [
  'models/pages/PageBase',

  'views/pages/Calendar/Page',

  'ovivo'
], (PageBase, View) ->
  PageBase.extend
    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      true