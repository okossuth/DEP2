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

  addEvent: (event) ->
    _view = event.getView()

    @view.addEvent _view

  addWorkingHour: (workingHour) ->
    _view = workingHour.getView()

    @view.addWorkingHour _view
    
    true

  initialize: (attrs, options) ->
    @proxyCall 'initialize', arguments

    @set 'pk', "#{@year()}-#{@month()}-#{@date()}#{if @disabled() is true then '-disabled' else ''}"
    @set 'dateObj', new Date @year(), @month(), @date()

    @view = new @View
      model: @
      el: options.el

    _.each ovivo.desktop.resources.events.dateCache["#{@year()}-#{@month() + 1}-#{@date()}"], (event) =>
      @addEvent event
 
    true