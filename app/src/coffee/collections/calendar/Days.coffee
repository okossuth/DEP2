define [
  'ovivo'
], () ->
  Backbone.Collection.extend
    comparator: (day) -> day.dateObj()

    initElements: (elements, days) -> _.each _.zip(elements, days), ([element, day]) => @add day, { el: element }; @

    _addDayCache: (day, cache, model) ->
      _key = model.id

      if not (_arr = cache[_key])? then _arr = cache[_key] = []

      _arr.push day

    _getDaysCache: (cache, model) ->
      cache[model.id]

    _clearDayCache: (cache, model) ->
      cache[model.id] = []

    processEventAdd: (event) ->
      _day = @get(event.getKey())

      if _day?
        @_addDayCache _day, @eventsCache, event

        _day.addEvent event

      true

    _rangeResultProcessor: (rangeResult, hash, adderName) ->
      _.each rangeResult, (obj) =>
        _key = "#{obj.date.getFullYear()}-#{obj.date.getMonth()}-#{obj.date.getDate()}"
        _day = @get(_key)

        if _day?
          @_addDayCache _day, hash, obj.model

          _day[adderName] obj.model

    processWorkingHours: (start, end) ->
      @_rangeResultProcessor ovivo.desktop.resources.workingHours.processRange(start, end), @workingHoursCache, 'addWorkingHour'

    processInactivities: (start, end) ->
      @_rangeResultProcessor ovivo.desktop.resources.inactivities.processRange(start, end), @inactivitiesCache, 'addInactivity'

    processWorkingHourAdd: (workingHour) ->
      start = @first().dateObj()
      end = @last().dateObj()

      @_rangeResultProcessor workingHour.processRange(start, end), @workingHoursCache, 'addWorkingHour'

    processInactivityAdd: (workingHour) ->
      start = @first().dateObj()
      end = @last().dateObj()

      @_rangeResultProcessor workingHour.processRange(start, end), @inactivitiesCache, 'addInactivity'

    processEventRemove: (model) ->
      _.each @_getDaysCache(@eventsCache, model), (day) -> day.removeEvent model

      @_clearDayCache @eventsCache, model

    processWorkingHourRemove: (model) ->
      _.each @_getDaysCache(@workingHoursCache, model), (day) -> day.removeWorkingHour model

      @_clearDayCache @workingHoursCache, model

    processInactivityRemove: (model) ->
      _.each @_getDaysCache(@inactivitiesCache, model), (day) -> day.removeInactivity model

      @_clearDayCache @inactivitiesCache, model

    processEventChange: (model) ->
      @processEventRemove model
      @processEventAdd model

    processWorkingHourChange: (model) ->
      @processWorkingHourRemove model
      @processWorkingHourAdd model

    processInactivityChange: (model) ->
      @processInactivityRemove model
      @processInactivityAdd model

    initialize: (models, options) ->
      _.extend @, options

      @workingHoursCache = {}
      @eventsCache = {}
      @inactivitiesCache = {}

      ovivo.desktop.resources.events.on 'add', @processEventAdd, @
      ovivo.desktop.resources.workingHours.on 'add', @processWorkingHourAdd, @
      ovivo.desktop.resources.inactivities.on 'add', @processInactivityAdd, @

      ovivo.desktop.resources.events.on 'remove', @processEventRemove, @
      ovivo.desktop.resources.workingHours.on 'remove', @processWorkingHourRemove, @
      ovivo.desktop.resources.inactivities.on 'remove', @processInactivityRemove, @

      ovivo.desktop.resources.events.on 'change:type', @processEventChange, @
      ovivo.desktop.resources.workingHours.on 'change', @processWorkingHourChange, @
      ovivo.desktop.resources.inactivities.on 'change', @processInactivityChange, @

      true