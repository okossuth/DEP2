define [
  'ovivo'
], () ->
  Backbone.Collection.extend
    comparator: (day) -> day.dateObj()

    initElements: (elements, days) -> _.each _.zip(elements, days), ([element, day]) => @add day, { el: element }; @

    processEventAdd: (event) ->
      @get(event.getKey())?.addEvent event

    _workingHourProcessor: (rangeResult) ->
      _.each rangeResult, (obj) =>
        _key = "#{obj.date.getFullYear()}-#{obj.date.getMonth()}-#{obj.date.getDate()}"

        @get(_key)?.addWorkingHour obj.model

    processWorkingHours: (start, end) ->
      @_workingHourProcessor ovivo.desktop.resources.workingHours.processRange(start, end)

    processWorkingHourAdd: (workingHour) ->
      start = @first().dateObj()
      end = @last().dateObj()

      @_workingHourProcessor workingHour.processRange(start, end)

    initialize: (models, options) ->
      _.extend @, options

      ovivo.desktop.resources.events.on 'add', @processEventAdd, @
      ovivo.desktop.resources.workingHours.on 'add', @processWorkingHourAdd, @

      true