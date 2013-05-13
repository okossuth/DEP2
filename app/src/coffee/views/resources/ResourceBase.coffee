define [
  '_common/ToolsBase',

  'ovivo'
], (ToolsBase) ->
  _Base = Backbone.View.extend _.extend {}, ToolsBase,
    _render: () -> 
      @$el.html @template @

      if not @model.view? then @model.view = @

      if @postRender? then @postRender()

      @model.trigger 'rendered'

      true

    highlight: () -> @$el.addClass 'highlight'
    removeHighlight: () -> @$el.removeClass 'highlight'

    events: {}

    processRemove: () ->
      @model.destroy()

    exposeAttrs: (ToolsBase.once 'exposeAttrs', () -> _.each @model._gettersNames, (name) => if not @constructor.prototype[name]? then @constructor.prototype[name] = () -> @model[name]())

    render: ToolsBase.throttleGroup('render', 'renderGroup', 50)

    renderGroup: (views) ->
      views = _.pluck views, 'ctx'

      _hash = {}
      views = _.filter views, (view) -> if _hash[view.cid] isnt true then _hash[view.cid] = true; true else false

      _DOM = $ @groupTemplate 
        elements: views

      _.each views, (view) ->
        _elements = $('#element-view-' + view.model.pk() + '-' + view.cid, _DOM)

        view.$el.children().remove()
        view.$el.append _elements.children()

        if not view.model.view? then view.model.view = @

        if view.postRender? then view.postRender()

        view.model.trigger 'rendered'
        view.trigger 'rendered'

        true

      if @groupRenderComplete? then @groupRenderComplete()

    stopPropagation: (e) ->
      e.stopPropagation()

      false

    _processRemove: () -> @remove()

    initialize: () ->
      @exposeAttrs()

      @render()

      @model.on 'change', @render, @
      @model.on 'remove', @_processRemove, @

      true

    show: () -> @$el.show()
    hide: () -> @$el.hide()

  _Base.prototype._base = _Base

  _Base
