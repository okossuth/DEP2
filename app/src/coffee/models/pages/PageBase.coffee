define [
  '_common/ToolsBase',

  'ovivo'
], (ToolsBase) ->
  _Base = Backbone.Model.extend _.extend {}, ToolsBase,
    show: () -> @view.show.apply @view, Array.prototype.slice.call arguments, 0

    initialize: (attrs, options) ->
      _obj = 
        model: @

      if options?.el? then _obj.el = options.el

      @view = new @View _obj

      true

    clear: () -> if @view.clear? then @view.clear()

  _Base.prototype._base = _Base

  _Base