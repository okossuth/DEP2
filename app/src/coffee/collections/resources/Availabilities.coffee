define [
  'models/resources/Availability',

  '_common/ResourceManagerBase',

  '_features/trailZero',

  'ovivo'
], (Model, ResourceManagerBase, trailZero) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    _url: () -> "#{ovivo.config.API_URL_PREFIX}availability/#{@_start}/#{@_end}/?group=#{@_group}"

    processResponse: do ->
      _processUser = (group, arr, user) ->
        _.each arr, (obj) =>
          obj.user = user
          obj.group = group

          @add obj

      (group, data) ->
        _.each data, _.bind _.wrap(group, _processUser), @

    _fetchGroup: (start, end, group) ->
      @_start = "#{start.getFullYear()}-#{trailZero(start.getMonth() + 1)}-#{trailZero(start.getDate())}"
      @_end = "#{end.getFullYear()}-#{trailZero(end.getMonth() + 1)}-#{trailZero(end.getDate())}"
      @_group = group

      _request = $.ajax
        dataType: 'json'
        type: 'GET'
        url: @_url()

      _request.done (data) => @processResponse group, data

    _fetch: (start, end) ->
      ovivo.desktop.resources.groups.def.then () =>
        ovivo.desktop.resources.groups.each (group) => @_fetchGroup start, end, group.pk()

    fetchMonth: (month, year) ->
      _key = "#{year}-#{month}"

      if not @_monthsCache[_key]?
        @_monthsCache[_key] = true

        _start = new Date year, month, 1
        _end = new Date _start

        _end.moveToLastDayOfMonth()

        @_fetch _start, _end

    fetchWeek: (number, year) -> 
      _date = new Date year, 0, 1
      _date.setWeek number

      @fetchMonth _date.getMonth(), year

    initFetch: () -> _def = new $.Deferred(); _def.resolve(); _def

    initialize: () ->
      @_monthsCache = {}

      # @initResource()

      true