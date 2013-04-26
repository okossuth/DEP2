define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    events: {}

    render: () -> true

    addEvent: (view) -> 
      @events.push view

      @calendarItems.append view.el

      @updateEventsCounter()

      true

    updateEventsCounter: () ->
      _html = if @events.length > 1
          @events.length + ' ' + ngettext('event', 'events', @events)
        else
          ''

      @eventsCounter.html _html

    processClick: () -> @$el.toggleClass 'expanded'

    initialize: () ->
      @proxyCall 'initialize', arguments

      @events = []

      # @$el.on 'click', _.bind @processClick, @

      @calendarItems = @$('.calendar-items')
      @eventsCounter = @$('.events-counter')

      true