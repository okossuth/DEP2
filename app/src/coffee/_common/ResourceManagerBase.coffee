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

  processModelChange: (model, obj) ->
    if @_checkIfIgnore(model) is true then return true

    if (model.url?) and (not model.changed.pk?) and model.id? and (obj.socket_io isnt true) and (obj.cache_update isnt true) then model.save()

  _checkIfIgnore: (model) ->
    if @_ignoreChange instanceof Array
      _i = 0

      while _i < @_ignoreChange.length
        if typeof model.changed[@_ignoreChange[_i]] isnt 'undefined'
          return true

        _i += 1

    return false

  cache: () ->
    localStorageCache.cache @, @_url

  changeCacheHandler: (model) ->
    if @_checkIfIgnore(model) is true then return true

    localStorageCache.cache @, @_url

  attachProcessors: () ->
    if @ instanceof Backbone.Model
      @on 'change', @changeCacheHandler, @
      @on 'change', @processModelChange, @

    else if @ instanceof Backbone.Collection
      @on 'add', @cache, @
      @on 'remove', @cache, @
      @on 'change', @changeCacheHandler, @
      @on 'change', @processModelChange, @

    true

  initResource: () ->
    @_url = do () => if typeof @url is 'function' then @url() else @url

    @def = new $.Deferred()

    @def.done () => @attachProcessors()

    @on 'sync', @_syncHandler, @

    true