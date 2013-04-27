define [
  'ovivo'
], () ->
  events: {}

  render: () -> true

  addEvent: (view) -> 
    @events.push view

    @calendarItems.append view.el

    @updateEventsCounter()

    true

  addWorkingHour: (view) ->
    @calendarItems.append view.el

  updateEventsCounter: () ->
    _html = if @events.length > 1
        @events.length + ' ' + ngettext('event', 'events', @events)
      else
        ''

    @eventsCounter.html _html

  initialize: () ->
    @proxyCall 'initialize', arguments

    @events = []

    @calendarItems = @$('.calendar-items')
    @eventsCounter = @$('.events-counter')

    true