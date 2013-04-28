define [
  '_common/ToolsBase',

  'ovivo'
], (ToolsBase) ->
  _Base = Backbone.Model.extend _.extend {}, ToolsBase,
    idAttribute: 'pk'

    createGetters: (ToolsBase.once 'createGetters', () -> _.each @_gettersNames, (name) => if not @constructor.prototype[name]? then @constructor.prototype[name] = () -> @get name)

    addDay: (day) -> @calendarDays.push day
    addDays: (days) -> @calendarDays = @calendarDays.concat days

    getView: () -> new @View
      model: @

    initialize: (attrs, options) ->
      @calendarDays = []

      @createGetters()

      if @View?
        @view = new @View
          model: @

      true

    setValue: (name, value) -> @set name, value

  _Base.prototype._base = _Base

  _Base