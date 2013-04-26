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

    clearSelection: () ->
      if window.getSelection?
        if window.getSelection().empty?
          window.getSelection().empty()

        else if window.getSelection().removeAllRanges?
          window.getSelection().removeAllRanges()

      else if document.selection?
        document.selection.empty()

      true

    showEl: () -> @$el.removeClass 'hide'
    hideEl: () -> @$el.addClass 'hide'

    transitionStart: () ->

    transitionComplete: (type) -> 
      if type is 'exit' then @hideEl()

      true

    showSubView: (name) -> @model.set 'subView', name

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

    initialize: () ->
      @model.on 'change:subView', @processSubView, @

      @content = @$('div.content')[0]

      @subViews = []

      _.each @SubViews, (SubView) => 
        _subView = new SubView()

        @subViews[_subView.name] = _subView
        @subViews.push _subView

      @_initSubView()

      true

  _Base.prototype._base = _Base

  _Base
