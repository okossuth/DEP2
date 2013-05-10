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
      'click .button-close-subview': 'closeSubview'
      'click .button-add': 'addButton'
      'click .button-delete': 'deleteButton'

    addButton: () ->
      @subViews[@subView()].trigger 'action:add'

    deleteButton: () ->
      @subViews[@subView()].trigger 'action:delete'

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

    transitionStart: () ->

    transitionComplete: (type) -> 
      if type is 'exit' then @hideEl()

      true

    showSubView: (name) -> 
      _.each _.without(@subViews, @subViews[name]), (subView) ->
        @$(".#{subView.name}-only").hide()

      @processScroll.call @subViews[name].el

      @$(".#{name}-only").show()

      @model.set 'subView', name, { silent: true }

      @model.trigger 'change:subView', @model, @model.collection

    subView: () -> @model.get 'subView'

    hideElements: (name, selector) ->
      @$(".#{name}-only #{selector}").hide()

    showElements: (name, selector) ->
      @$(".#{name}-only #{selector}").show()

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
        _subViewName = @defaultSubView

      @showSubView _subViewName

      true

    processContentScrollBind: ($el) ->
      () ->
        if (this.scrollTop isnt 0) and (@scrolled isnt true)
          $el.addClass('scrolled')

          @scrolled = true

        if this.scrollTop is 0
          $el.removeClass('scrolled')

          @scrolled = false

        true

    initialize: () ->
      @model.on 'change:subView', @processSubView, @

      @content = @$('div.content')

      @processScroll = @processContentScrollBind @$el

      @content.on 'scroll', @processScroll

      @subViews = []

      _.each @SubViews, (SubView) => 
        _subView = new SubView()
        _subView.page = @

        @subViews[_subView.name] = _subView
        @subViews.push _subView

      @_initSubView()

      true

  _Base.prototype._base = _Base

  _Base
