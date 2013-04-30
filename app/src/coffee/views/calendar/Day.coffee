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

    if _name is 'inactivity'
      @inactivities[elem.id]

    else if _name is 'workingHour'
      @workingHours[elem.id]

    else if _name is 'event'
      @events[elem.id]

  _removeModel: (model, hash) ->
    _view = hash[model.id]

    if _view?
      _view.remove()

      delete hash[model.id]

      @_removeFromArr model, @elements

    true

  _insertElement: do ->
    _order = ['inactivity', 'workingHour', 'event']

    _eventTypeOrder = ['closed', 'open-responses', 'open']

    _compare = (a, b) ->
      _orderA = _.indexOf _order, a.typeName
      _orderB = _.indexOf _order, b.typeName

      if ((_delta = (_orderB - _orderA)) isnt 0) or (_orderA is 0)
        _delta

      else
        if ((_orderA is 2) and ((_eventOrderA = _.indexOf(_eventTypeOrder, a.type())) is (_eventOrderB = _.indexOf(_eventTypeOrder, b.type())))) or (_orderA isnt 2)
          _timeA = new Date(Date.parse a.start_time()) 
          _timeB = new Date(Date.parse b.start_time())

          _timeB - _timeA

        else
          _eventOrderB - _eventOrderA

    (model, view, hash) ->
      _i = 0

      while (_i < @elements.length) and (_compare((_element = @elements[_i]), model) > 0)
        _i += 1

      if _i < @elements.length
        @_getFromHash(_element).$el.before view.el

      else
        @calendarItems.append view.el

      @elements.splice _i, 0, model

  _addModel: (model, view, hash) ->
    hash[model.id] = view

    @_insertElement model, view, hash

  addEvent: (view, model) ->
    @_addModel model, view, @events

    @updateEventsCounter()

    true

  removeEvent: (model) -> @_removeModel model, @events

  addWorkingHour: (view, model) ->
    @_addModel model, view, @workingHours

  removeWorkingHour: (model) -> @_removeModel model, @workingHours

  addInactivity: (view, model) ->
    @_addModel model, view, @inactivities

  removeInactivity: (model) -> @_removeModel model, @inactivities

  updateEventsCounter: () ->
    _amount = _.keys(@events).length
    _html = if _amount > 1
        _amount + ' ' + ngettext('event', 'events', @events)
      else
        ''

    @eventsCounter.html _html

  setToday: () -> @$el.addClass 'current'

  initialize: () ->
    @proxyCall 'initialize', arguments

    @events = {}
    @workingHours = {}
    @inactivities = {}

    @elements = []

    @calendarItems = @$('.calendar-items')
    @eventsCounter = @$('.events-counter')

    true