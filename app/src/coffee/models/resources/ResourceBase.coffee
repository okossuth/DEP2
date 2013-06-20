define [
  '_common/ToolsBase',

  'ovivo'
], (ToolsBase) ->
  _Base = Backbone.Model.extend _.extend {}, ToolsBase,
    idAttribute: 'pk'

    createGetters: do ->
      _nativeGetter = (_name) -> () -> @get _name

      _foreignGetter = (_arr) -> () -> @get(_arr[1])[_arr[0]]()

      (ToolsBase.once 'createGetters', () -> _.each @_gettersNames, (arr) =>
        _getter = (if typeof arr is 'string' then _nativeGetter else _foreignGetter) arr
        _name = if typeof arr is 'string' then arr else arr[0]

        if not @constructor.prototype[_name]? then @constructor.prototype[_name] = _getter)

    addDay: (day) -> @calendarDays[day.cid] = day
    addDays: (days) -> @calendarDays = @calendarDays.concat days

    removeDay: (day) -> delete @calendarDays[day.cid]

    getView: () -> new @View
      model: @

    highlight: () ->
      _.each _.values(@calendarDays), (day) => day.highlight @

    removeHighlight: () ->
      _.each _.values(@calendarDays), (day) => day.removeHighlight @

    initialize: (attrs, options) ->
      @calendarDays = {}

      @createGetters()

      if @View?
        @view = new @View
          model: @

      true

    setValue: (name, value) -> @set name, value

  _Base.prototype._base = _Base

  _Base