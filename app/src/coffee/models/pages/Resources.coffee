define [
  'models/pages/PageBase',

  'views/pages/Resources/Page',

  'ovivo'
], (PageBase, View) ->
  PageBase.extend
    saveState: false

    menuFlag: false

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      true