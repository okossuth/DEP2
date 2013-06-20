define [
  '_features/binarySearch',

  'ovivo'
], (binarySearch) ->
  _scrollComparator: (obj, val) ->
    return -1 if obj.start >= val

    return 1 if obj.end < val

    return 0

  addModel: (obj) ->
    _model = new @model obj

    @add _model

    _model

  setMode: (value) ->
    @mode = value

  _forwardCall: (model, methodName) ->
    if not @innerCollectionName? then return

    _args = Array.prototype.slice.call arguments, 2

    _inner = ''

    if (_type = typeof @innerCollectionName) is 'string'
      _inner = @innerCollectionName

    else if (_type is 'object') and @mode?
      _inner = @innerCollectionName[@mode]

    if (not _inner?) or _inner is '' then return

    model[_inner][methodName].apply model[_inner], _args

  processScroll: (val, height) ->
    _res = binarySearch @_scrollData, val, @_scrollComparator

    if _res isnt null
      _delta = val - _res.start

      _res.model.processScroll _res, _delta

      @_forwardCall _res.model, 'processScroll', _delta, height

    if _res is @_prev then return

    @_clearPrev()

    @_prev = _res

  _clearPrev: () ->
    if not @_prev? then return

    @_prev.model.clearScroll()

    @_forwardCall @_prev.model, '_clearPrev'

    true

  _itemsSelector: () -> @map (m) -> m

  calcScrollData: () ->
    if @_prev? then @_prev.model.clearScroll()

    @_prev = null

    @_scrollData = _.map @_itemsSelector(), (model) =>
      _h = model.view.el.offsetHeight
      _t = model.view.el.offsetTop

      @_forwardCall model, 'calcScrollData'

      el: model.view.el
      model: model
      start: _t
      end: _t + _h
      height: _h

    @_scrollData[@_scrollData.length - 1].last = true if @_scrollData.length > 0

    true