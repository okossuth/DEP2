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

    _rangeResultProcessor: (rangeResult, hash, adderName) ->
      _.each rangeResult, (obj) =>
        _key = "#{obj.date.getFullYear()}-#{obj.date.getMonth()}-#{obj.date.getDate()}"
        _day = @get(_key)

        if _day?
          @_addDayCache _day, hash, obj.model

          _day[adderName] obj.model, obj

    processResourceNeeds: (start, end) ->
      @_rangeResultProcessor ovivo.desktop.resources.resourceNeeds.processRange(start, end), @resourceNeedsCache, 'addResourceNeed'

    processResourceNeedAdd: (workingHour) ->
      start = @first().dateObj()
      end = @last().dateObj()

      @_rangeResultProcessor workingHour.processRange(start, end), @resourceNeedsCache, 'addResourceNeed'

    processResourceNeedRemove: (model) ->
      _.each @_getDaysCache(@resourceNeedsCache, model), (day) -> day.removeResourceNeed model

      @_clearDayCache @resourceNeedsCache, model

    processResourceNeedChange: (model) ->
      @processResourceNeedRemove model
      @processResourceNeedAdd model

    processAvailabilityAdd: (model) ->
      _data = new Date Date.parse model.start()
      _key = model._key = "#{_data.getFullYear()}-#{_data.getMonth()}-#{_data.getDate()}"

      _day = @get _key

      _day?.addAvailability model

    initialize: (models, options) ->
      _.extend @, options

      @todayFound = false

      @resourceNeedsCache = {}

      # ovivo.desktop.resources.resourceNeeds.on 'add', @processResourceNeedAdd, @
      # ovivo.desktop.resources.resourceNeeds.on 'remove', @processResourceNeedRemove, @
      # ovivo.desktop.resources.resourceNeeds.on 'change', @processResourceNeedChange, @

      # ovivo.desktop.resources.availabilities.on 'add', @processAvailabilityAdd, @

      true