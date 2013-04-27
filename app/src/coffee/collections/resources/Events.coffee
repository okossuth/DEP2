define [
  '_features/localStorageCache',

  'collections/resources/CachableCollection',
  'collections/CollectionBase',

  'models/resources/Event',

  'ovivo'
], (localStorageCache, CachableCollection, CollectionBase, Event) ->
  CachableCollection.extend _.extend {}, CollectionBase,
    model: Event

    url: () -> "#{ovivo.config.API_URL_PREFIX}users/#{ovivo.config.USER_ID}/events/"

    template: Handlebars.templates['events']

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

    fetchBetween: (start_pk, end_pk) ->
      @_fetch
        start_pk: start_pk
        end_pk: end_pk

    fetchNext: (limit = 10) ->

      @_fetch do () =>
        _obj = 
          start_pk: @last()?.pk()
          limit: limit

        if not _obj.start_pk? then delete _obj.start_pk

        _obj

    clear: () ->
      @monthCache = {}
      @dateCache = {}

      @reset()

      true

    initFetch: () ->
      @_ready = true

      _.each @_calls, (callObj) => @fetch callObj

      @_calls = []

      true

    renderGroup: (views) -> 
      _hash = {}
      views = _.filter views, (view) -> if _hash[view.model.id] isnt true then _hash[view.model.id] = true; true else false

      _DOM = $ @template 
        events: views

      _.each views, (view) ->
        _elements = $('#event-view-' + view.model.pk(), _DOM)
        view.$el.children().remove()
        view.$el.append _elements.children()
        view.postRender()

        true

    cache: () -> 

    initialize: (models, options) ->
      @_ready = false
      @_calls = []

      @type =
        'open': true
        'open-responses': true
        'closed': true
        
      _.extend @, options

      @on 'change', @cache, @

      @def = new $.Deferred()

      @monthCache = {}

      @initCache()

      true