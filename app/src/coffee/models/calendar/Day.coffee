define [
  'ovivo'
], () ->
  _gettersNames: [
    'date'
    'disabled'
    'month'
    'week_number'
    'year'
    'dateObj'
  ]

  addEvent: (model) ->
    _view = model.getView()

    @view.addEvent _view, model

  removeEvent: (model) -> @view.removeEvent model

  addWorkingHour: (model) ->
    _view = model.getView()

    @view.addWorkingHour _view, model

  removeWorkingHour: (model) -> @view.removeWorkingHour model

  addInactivity: (model, obj) ->
    _view = model.getView obj

    @view.addInactivity _view, model

  removeInactivity: (model) -> @view.removeInactivity model

  checkToday: () ->
    if @collection.todayFound isnt true
      _now = Date.today()

      if (_now - @dateObj()) is 0
        @view.setToday()

        @collection.todayFound = true

  initialize: (attrs, options) ->
    @proxyCall 'initialize', arguments

    @set 'pk', "#{@year()}-#{@month()}-#{@date()}#{if @disabled() is true then '-disabled' else ''}"
    @set 'dateObj', new Date @year(), @month(), @date()

    @view = new @View
      model: @
      el: options.el

    @checkToday()

    _.each ovivo.desktop.resources.events.dateCache["#{@year()}-#{@month() + 1}-#{@date()}"], (event) =>
      @addEvent event
 
    true