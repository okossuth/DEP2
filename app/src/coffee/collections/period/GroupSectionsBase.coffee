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

  processScroll: (val, height) ->
    _res = binarySearch @_scrollData, val, @_scrollComparator

    if _res isnt null
      _delta = val - _res.start

      _res.model.processScroll _res, _delta
      if @innerCollectionName? then _res.model[@innerCollectionName].processScroll _delta, height

    if _res is @_prev then return

    @_clearPrev()

    @_prev = _res

  _clearPrev: () ->
    if not @_prev? then return

    @_prev.model.clearScroll()

    if @innerCollectionName? then @_prev.model[@innerCollectionName]._clearPrev()

    true

  _itemsSelector: () -> @map (m) -> m

  calcScrollData: () ->
    if @_prev? then @_prev.model.clearScroll()

    @_prev = null

    @_scrollData = _.map @_itemsSelector(), (model) =>
      _h = model.view.el.offsetHeight
      _t = model.view.el.offsetTop

      if @innerCollectionName? then model[@innerCollectionName].calcScrollData()

      el: model.view.el
      model: model
      start: _t
      end: _t + _h
      height: _h

    @_scrollData[@_scrollData.length - 1].last = true if @_scrollData.length > 0

    true