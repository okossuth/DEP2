define [
  '_features/transition',

  'models/Page',

  'ovivo'
], (transition, Model) ->
  Backbone.Collection.extend
    model: Model

    addPage: (Page, name, options) ->
      _model = new Model {},
        Page: Page
        name: name
        options: options

      @add _model

      _model

    transition: (source, target, _args) ->
      _sourceView = source.page.view
      _targetView = target.page.view

      _.each [_sourceView, _targetView], (page) -> 
        page.showEl()

        true

      _sourceView.transitionStart.apply _sourceView, ['exit'].concat _args
      _targetView.transitionStart.apply _targetView, ['enter'].concat _args

      transition.transit(_sourceView.el, _targetView.el, 'enter', 'exit', false).done () =>
        _sourceView.transitionComplete.apply _sourceView, ['exit'].concat _args
        _targetView.transitionComplete.apply _targetView, ['enter'].concat _args

        true

      true

    processShow: (page) ->
      _args = Array.prototype.slice.call arguments, 1

      if @current isnt page
        if (@current isnt undefined)
          @transition @current, page, _args

        else page.page.view.showEl()

        @current = page

      true

    initialize: () ->
      @on 'show', @processShow, @

      true