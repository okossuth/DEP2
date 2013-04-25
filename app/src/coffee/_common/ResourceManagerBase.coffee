define [
  '_features/localStorageCache',

  '_common/ToolsBase',

  'ovivo'
], (localStorageCache, ToolsBase) ->
  _fetchSuccess: () -> true
  _fetchError: () -> @def.reject()
  _syncHandler: () -> @def.resolve()

  _getQueryString: (data) -> _.reduce data, ((memo, value, key) -> "#{memo}&#{key}=#{value}"), ''

  initFetch: () ->
    @_fetch()

  _fetch: (data) ->
    _queryStringFinal = (@_getQueryString(data)).slice 1

    @fetch
      update: true
      remove: false

      data: _queryStringFinal

      error: _.bind @_fetchError, @
      success: _.bind @_fetchSuccess, @

    @def

  setValue: (name, value) ->
    if @ instanceof Backbone.Model
      @set name, value

    else if @ instanceof Backbone.Collection
      _model = @get(parseInt(name.split('-')[1]))

      _model.set 'checked', not value

      _model.save()

    true

  processModelChange: () ->
    @save()

  cache: () -> localStorageCache.cache @, @_url

  attachProcessors: () ->
    if @ instanceof Backbone.Model
      @on 'change', @cache, @
      @on 'change', @processModelChange, @

    else if @ instanceof Backbone.Collection
      @on 'add', @cache, @
      @on 'remove', @cache, @
      @on 'change', @cache, @

    true

  initResource: () ->
    @_url = do () => if typeof @url is 'function' then @url() else @url

    @def = new $.Deferred()

    @def.done () => @attachProcessors()

    @on 'sync', @_syncHandler, @

    true