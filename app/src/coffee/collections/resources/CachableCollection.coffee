define [
  'ovivo'
], () ->
  Backbone.Collection.extend
    _getCacheDateString: (model) -> 
      [_year, _month, _day] = model.start_date().split('-')

      "#{parseInt(_year)}-#{parseInt(_month)}-#{parseInt(_day)}"

    addCacheHandler: (model, collection) ->
      if model.start_date() isnt undefined
        _hash = @_getCacheDateString model

        if typeof @dateCache[_hash] is 'undefined'
          @dateCache[_hash] = []

        @dateCache[_hash].push model

      true

    removeCacheHandler: (model, collection) ->
      _hash = @_getCacheDateString model
      
      _array = @dateCache[_hash]
      _i = _.indexOf _array, model

      if _i isnt -1
        _array.splice _i, 1

        if _array.length is 0 then @dateCache[_hash] = undefined

      true

    initCache: () ->
      @dateCache = {}

      @on 'add', @addCacheHandler, @
      @on 'remove', @removeCacheHandler, @

      true