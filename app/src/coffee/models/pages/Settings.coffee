define [
  'models/pages/PageBase',

  'views/pages/Settings/Page',

  'ovivo'
], (PageBase, View) ->
  PageBase.extend
    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      true