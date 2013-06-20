define [
  '_common/ToolsBase',

  '_features/transition',

  'ovivo'
], (ToolsBase, transition) ->
  _Base = Backbone.View.extend _.extend {}, ToolsBase,
    show: () ->
      @model.trigger.apply @model, ['show'].concat Array.prototype.slice.call arguments, 0

      true

    events:
      'click .no-selection': 'clearSelection'
      'click .button-close': 'close'
      'click .button-close-subview': 'closeSubview'
      'click .button-add': 'addButton'
      'click .button-save': 'saveButton'
      'click .button-delete': 'deleteButton'

    addButton: () ->
      @subViews[@subView()].trigger 'action:add'

    deleteButton: () ->
      @subViews[@subView()].trigger 'action:delete'

    saveButton: () ->
      @subViews[@subView()].trigger 'action:save'

    clearSelection: () ->
      if window.getSelection?
        if window.getSelection().empty?
          window.getSelection().empty()

        else if window.getSelection().removeAllRanges?
          window.getSelection().removeAllRanges()

      else if document.selection?
        document.selection.empty()

      true

    close: () -> @hideEl()
    closeSubview: () -> @subViews[@subView()].close()

    showEl: () -> @$el.removeClass 'hide'
    hideEl: () -> @$el.addClass 'hide'

    transitionStart: (type) ->
      if type is 'enter' then @showSubView @subView()

    transitionComplete: (type) ->
      if type is 'exit' then @hideEl()

    showSubView: (name) ->
      if not name? then return

      _subView = @subViews[name]

      _.each _.without(@subViews, @subViews[name]), (subView) ->
        @$(".#{subView.name}-only").hide()

      @$(".#{name}-only").show()

      @model.set 'subView', name

      @processContentScrollBind.process _subView.el

      _subView.trigger 'show'

    subView: () -> @model.get 'subView'

    transition: (source, target) ->
      _.each [source, target], (page) ->
        page.showEl()

        true

      transition.transit(source.el, target.el, 'enter', 'exit', false).done () =>
        source.hideEl()

        true

    processSubView: (page) ->
      _subViewName = @subView()
      _subView = @subViews[_subViewName]

      if _subView?
        if @prevSubView?
          @transition(@prevSubView, _subView).done () =>
            @trigger 'subViewChange', _subViewName

            @prevSubView = _subView

        else
          _subView.showEl()

          @trigger 'subViewChange', _subViewName

          @prevSubView = _subView

      true

    _initSubView: () ->
      if not (_subViewName = @subView())?
        @model.set 'subView', @defaultSubView

      else
        @processSubView()

      true

    hideElements: (name, selector) ->
      @$(".#{name}-only #{selector}").hide()

    showElements: (name, selector) ->
      @$(".#{name}-only #{selector}").show()

    processContentScrollBind: do ->
      _checkScrollTop = () ->
        _scrollTop = @el.scrollTop

        if (_scrollTop isnt 0)
          if not (@$el.hasClass 'scrolled-top')
            @$el.addClass 'scrolled scrolled-top'

        else
          @$el.removeClass 'scrolled-top'

          if not @$el.hasClass 'scrolled-bottom'
            @$el.removeClass 'scrolled'

        true

      _checkScrollBottom = () ->
        _scrollTop = @el.scrollTop

        if ((@offsetHeight + _scrollTop) isnt @scrollHeight)
          if not (@$el.hasClass 'scrolled-bottom')
            @$el.addClass 'scrolled scrolled-bottom'

        else
          @$el.removeClass 'scrolled-bottom'

          if not @$el.hasClass 'scrolled-top'
            @$el.removeClass 'scrolled'

        true

      _usualHandler = () ->
        _checkScrollTop.call @
        _checkScrollBottom.call @

        true

      _initialHandler = (manualFlag) ->
        @offsetHeight = @el.offsetHeight
        @scrollHeight = @el.scrollHeight

        if manualFlag isnt true
          @handler = _usualHandler

        _usualHandler.call @

      _cache = []

      _func = ($el, el) ->
        _ctx =
          handler: _initialHandler
          el: el
          $el: $el

        _cache.push _ctx

        _handler = () ->
          _ctx.handler()

          true

        _handler.update = () ->
          _ctx.handler = _initialHandler

        _handler

      _func.process = (el) ->
        if not $(el).hasClass('scrollable')
          el = $('.scrollable', el)[0]

        if not el? then return true

        _ctx = _.find _cache, (ctx) -> ctx.el is el

        if _ctx? then _ctx.handler true

        true

      _func

    updateScrollProcessors: () ->
      _.each @scrollProcessors, (processor) -> processor.update()

      @showSubView @subView()

    initialize: () ->
      @model.on 'change:subView', @processSubView, @

      @content = @$('div.content')

      @scrollProcessors = @$('.scrollable').map (i, el) =>
        _processor = @processContentScrollBind @$el, el

        $(el).on 'scroll', _processor

        _processor

      @subViews = []

      _.each @SubViews, (SubView) =>
        _subView = new SubView()

        _subView.page = @

        _subView.baseView = @

        @subViews[_subView.name] = _subView
        @subViews.push _subView

      @_initSubView()

      true

  _Base.prototype._base = _Base

  _Base