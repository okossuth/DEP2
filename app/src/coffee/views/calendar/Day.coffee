define [
  'ovivo'
], () ->
  events: {}

  render: () -> true

  _removeFromArr: (elem, arr) ->
    _i = _.indexOf arr, elem
    arr.splice _i, 1

  _insertBefore: (elem, arr, next) ->
    _i = _.indexOf arr, next

    arr.splice _i, 0, elem

  _getFromHash: (elem) ->
    _name = elem.typeName

    if _name is 'resourceNeed'
      @resourceNeeds[elem.id]

  _removeModel: (model, hash) ->
    _view = hash[model.id]

    model.removeDay @model

    if _view?
      _view.remove()

      delete hash[model.id]

      @_removeFromArr model, @elements

    true

  _insertElement: do ->
    _order = ['resourceNeed']

    _compare = (a, b) ->
      _orderA = _.indexOf _order, a.typeName
      _orderB = _.indexOf _order, b.typeName

      if ((_delta = (_orderB - _orderA)) isnt 0) or (_orderA is 0)
        _delta

      else
        _timeA = new Date(Date.parse a.start_time()) 
        _timeB = new Date(Date.parse b.start_time())

        _timeB - _timeA

    (model, view, hash) ->
      _i = 0

      while (_i < @elements.length) and (_compare((_element = @elements[_i]), model) > 0)
        _i += 1

      if _i < @elements.length
        @_getFromHash(_element).$el.before view.el

      else
        @calendarItems.append view.el

      @elements.splice _i, 0, model

  highlight: (model) ->
    @_getFromHash(model).highlight()

  removeHighlight: (model) ->
    @_getFromHash(model).removeHighlight()

  _addModel: (model, view, hash) ->
    hash[model.id] = view

    model.addDay @model

    @_insertElement model, view, hash

  addResourceNeed: (view, model) ->
    @_addModel model, view, @resourceNeeds

  removeResourceNeed: (model) -> @_removeModel model, @resourceNeeds

  setToday: () -> @$el.addClass 'current'

  initialize: () ->
    @proxyCall 'initialize', arguments

    @resourceNeeds = {}

    @elements = []

    @calendarItems = @$('.calendar-items')

    true