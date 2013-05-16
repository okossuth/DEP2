define [
  'ovivo'
], () ->
  get: (fields) ->
    _cacheAddProcessorField: (model, field, _value) ->
      if not _value? then _value = model[field]()

      if typeof _value is undefined then return

      if (_value instanceof Array) isnt true then _value = [_value]

      _.each _value, (value) =>
        if not (_obj = @_cache[field][value.valueOf()])? then _obj = @_cache[field][value.valueOf()] = {}

        _obj[model.cid] = model

    _cacheRemoveProcessorField: (model, field, _value) ->
      if not _value? then _value = model[field]()

      if typeof _value is undefined then return

      if (_value instanceof Array) isnt true then _value = [_value]

      _.each _value, (value) =>
        _obj = @_cache[field][value.valueOf()]

        if _obj? then delete _obj[model.cid]

    _cacheAddProcessor: (model) -> 
      _.each fields, (field) => @_cacheAddProcessorField model, field

    _cacheRemoveProcessor: (model) ->
      _.each fields, (field) => @_cacheRemoveProcessorField model, field

    _cacheChangeProcessor: (field, model) ->
      @_cacheRemoveProcessorField model, field, model.previous field

      @_cacheAddProcessorField model, field

    recalculateCache: (fields) ->
      _.each fields, (field) =>
        @_cache[field] = {}

        @each (model) => @_cacheAddProcessorField model, field

    initCacheProcessors: () ->
      @_cache = {}

      _.each fields, (field) => @_cache[field] = {}

      @on 'add', @_cacheAddProcessor, @

      @on 'remove', @_cacheRemoveProcessor, @

      _.each fields, (field) =>
        @on "change:#{field}", _.wrap(field, @_cacheChangeProcessor), @

    getBy: (field, values) -> 
      if (values instanceof Array) isnt true then values = [values]

      _.reduce values, ((memo, value) => memo.concat _.values @_cache[field][value.valueOf()]), []

    getKeys: (field) -> _.keys @_cache[field]