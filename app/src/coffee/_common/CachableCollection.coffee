define [
  'ovivo'
], () ->
  get: (fields) ->
    _cacheAddProcessorField: (model, field, _value) ->
      if not _value? then _value = model[field]()

      if not (_obj = @_cache[field][_value])? then _obj = @_cache[field][_value] = {}

      _obj[model.id] = model

    _cacheRemoveProcessorField: (model, field, _value) ->
      if not _value? then _value = model[field]()

      _obj = @_cache[field][_value]

      if _obj? then delete _obj[model.id]

    _cacheAddProcessor: (model) -> 
      _.each fields, (field) => @_cacheAddProcessorField model, field

    _cacheRemoveProcessor: (model) ->
      _.each fields, (field) => @_cacheRemoveProcessorField model, field

    _cacheChangeProcessor: (field, model) ->
      @_cacheRemoveProcessorField model, field, model.previous field

      @_cacheAddProcessorField model, field

    initCacheProcessors: () ->
      @_cache = {}

      _.each fields, (field) => @_cache[field] = {}

      @on 'add', @_cacheAddProcessor, @

      @on 'remove', @_cacheRemoveProcessor, @

      _.each fields, (field) =>
        @on "change:#{field}", _.wrap(field, @_cacheChangeProcessor), @

    getBy: (field, value) -> _.values @_cache[field][value]
    getKeys: (field) -> _.keys @_cache[field]