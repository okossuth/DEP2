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

      if page.page.menuFlag isnt false then ovivo.desktop.sideBar.setPage page.page.name

      if @current isnt page
        if (@current isnt undefined) and (page.page.popup isnt true)
          @transition @current, page, _args

        else
          page.page.view.showEl()

        @current = page

      true

    resizeHandler: () ->
      @each (page) -> page.page.view.updateScrollProcessors()

    initialize: () ->
      @on 'show', @processShow, @

      $(window).on 'resize', _.bind @resizeHandler, @

      true