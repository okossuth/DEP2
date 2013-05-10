define [
  '_common/ToolsBase',

  'ovivo'
], (ToolsBase) ->
  _Base = Backbone.Model.extend _.extend {}, ToolsBase,
    show: () -> @view.show.apply @view, Array.prototype.slice.call arguments, 0

    processChange: () ->
      if (@saveState isnt false) and (_localStorage = window.localStorage)?
        _localStorage[@id] = JSON.stringify @toJSON()

      true

    _getFromLocalStorage: () ->
      if (@saveState isnt false) and (_localStorage = window.localStorage)? and (_objStr = _localStorage[@id])?
        @set JSON.parse _objStr

      true

    toJSON: () ->
      subView: @get 'subView'

    initialize: (attrs, options) ->
      @name = attrs.name
      
      @on 'change:subView', @processChange, @

      @id = "page-#{@name}"

      @_getFromLocalStorage()

      _obj = 
        model: @

      if options?.el? then _obj.el = options.el

      @view = new @View _obj

      true

    clear: () -> if @view.clear? then @view.clear()

  _Base.prototype._base = _Base

  _Base