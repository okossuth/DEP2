define [
  '_common/ToolsBase',
  
  'ovivo'
], (ToolsBase) ->
  _Base = Backbone.View.extend _.extend {}, ToolsBase,
    show: () ->
      @model.trigger.apply @model, ['show'].concat Array.prototype.slice.call arguments, 0

      true

    events:
      'click .no-selection': 'clearSelection'
      'click .button-close': 'close'

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

    showEl: () -> @$el.removeClass 'hide'
    hideEl: () -> @$el.addClass 'hide'

    transitionStart: () ->

    transitionComplete: (type) -> 
      if type is 'exit' then @hideEl()

      if type is 'enter' then @showSubView @subView()

      true

    showSubView: (name) ->
      if not name? then return

      _.each _.without(@subViews, @subViews[name]), (subView) ->
        @$(".#{subView.name}-only").hide()

      @$(".#{name}-only").show()

      @model.set 'subView', name

      @processContentScrollBind.process @subViews[name].el

    subView: () -> @model.get 'subView'

    processSubView: (page) ->
      _subViewName = @subView()

      if @prevSubView? then @prevSubView.hideEl()

      if (_subView = @subViews[_subViewName])?
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

        _subView.baseView = @

        @subViews[_subView.name] = _subView
        @subViews.push _subView

      @_initSubView()

      true

  _Base.prototype._base = _Base

  _Base
