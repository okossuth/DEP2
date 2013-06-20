define [
  '_common/CachableCollection',

  'models/resources/Event',

  'ovivo'
], (CachableCollection, Event) ->
  Backbone.Collection.extend _.extend {}, CachableCollection.get(['date', 'skill', 'group']),
    model: Event

    url: () -> "#{ovivo.config.API_URL_PREFIX}events/"

    comparator: (event) -> new Date(event.start_date())

    _getQueryString: (data) -> _.reduce data, ((memo, value, key) -> "#{memo}&#{key}=#{value}"), ''

    _getTypeQueryString: (data) -> _.reduce data, ((memo, value, key) -> if value is true then "#{memo}&type=#{key}" else memo), ''

    _fetch: (data) ->
      _queryStringFinal = (@_getQueryString(data) + @_getTypeQueryString(@type)).slice 1

      if @def.state() is 'resolved'
        @def = new $.Deferred()

      _def = new $.Deferred()

      _callObj =
        update: true
        remove: false

        data: _queryStringFinal

        success: (col, response) =>
          @def.resolve(response)
          _def.resolve(response)

          true

        error: () =>
          @def.reject()
          _def.reject()

          true

      if @_ready is true
        @fetch _callObj

      else
        @_calls.push _callObj

      @def

    fetchMonth: (month, year) ->
      _def = new $.Deferred()

      if typeof @monthCache["#{year}-#{month}"] isnt 'undefined'
        _def.resolve()

      else
        @monthCache["#{year}-#{month}"] = true

        (@_fetch
          month: month + 1
          year: year).then () =>

          _def.resolve()

          true

      _def

    fetchWeek: (number, year, date) -> @fetchMonth date.getMonth(), year

    clear: () ->
      @monthCache = {}
      @dateCache = {}

      @reset()

      true

    initFetch: () ->
      @_ready = true

      _defs = _.map @_calls, (callObj) => @fetch callObj

      @_calls = []

      $.when.apply $, _defs

    initialize: (models, options) ->
      @_ready = false
      @_calls = []

      @initCacheProcessors()

      @type =
        'open': true
        'open-responses': true
        'closed': true

      _.extend @, options

      @def = new $.Deferred()

      @monthCache = {}

      true