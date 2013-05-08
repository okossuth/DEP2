requirejs [
  '_features/indicator',

  '_features/localStorageCache'
], (indicator, localStorageCache) ->
  do ->
    _sync = Backbone.sync
    _callsCounter = 0

    _processFlag = false

    _queue =
      'read': []
      'update': []
      'delete': []
      'create': []

    _queueRules = 
      'read': false
      'update': true
      'delete': false
      'create': false

    _callbackCreatorCreator = (action, done) ->
      (originalCallback, method, model, options) ->
        (model, resp) ->
          _callsCounter -= 1

          if typeof (_res = action(options._url, model, resp, method, options)) is 'object'
            resp = _res

          if _queueRules[method] is true
            _curObj = _queue[method].shift()
            _nextObj = _queue[method][0]

            if model._syncStamp isnt _curObj.stamp then resp = {}

            if _queue[method].length > 0 
              _sync.apply _nextObj.context, _nextObj.args

          if _callsCounter is 0 then done()

          originalCallback?.apply @, Array.prototype.slice.call arguments, 0

    _processReadSuccess = (url, model, resp, options) ->
      localStorageCache.cache resp, url

      if (model instanceof Backbone.Collection) and (resp instanceof Array)
        if model.fullResponse is true
          _.each _.without.apply(_, [model.pluck('pk')].concat(_.pluck(resp, 'pk'))), (pk) ->
            _model = model.get pk
            model.remove _model

        _.each resp, (obj, i) ->
          if (_model = model.get(obj.pk))?
            _model.set obj,
              cache_update: true

            delete resp[i]

        resp = _.compact resp

      resp

    _successCreator = _callbackCreatorCreator ((url, model, resp, method, options) -> 
      if method is 'read' then _processReadSuccess(url, model, resp, options)), indicator.success

    _errorCreator = _callbackCreatorCreator indicator.errorAction, indicator.error

    _postProcess = (method, model, options) ->
      if ((method is 'update') or (method is 'delete')) and typeof model.url is 'function'
        model.url = model.url() + '/'

        model.url = model.url.replace '//', '/'

      if method is 'delete'
        options.data = ' '

      true

    _processLocalStorageCache = (model, options) ->
      if localStorageCache.allowed() is true
        if localStorageCache.reset(model, options._url, options) is true
          model.def?.resolve options.resp

          false

        else 
          true

      else 
        true

    Backbone.sync = (method, model, options) ->
      _callsCounter += 1
      _args = Array.prototype.slice.call arguments, 0

      options._url = (do () => if typeof model.url is 'function' then model.url() else model.url) + (if options.data? and (options.data isnt '') then "?#{options.data}" else '')

      _flag = if method is 'read' 
          _processLocalStorageCache model, options

        else 
          true

      _call = () ->
        _stamp = (new Date()).valueOf().toString() + _callsCounter.toString()

        model._syncStamp = _stamp

        options.success = _successCreator.apply null, [options.success].concat _args
        options.error = _errorCreator.apply null, [options.error].concat _args

        _postProcess.apply @, _args

        indicator.start()

        if _queueRules[method] is true
          _queue[method].push
            stamp: _stamp
            context: @
            args: _args

        if (_queueRules[method] is true) and (_queue[method].length is 1) or (_queueRules[method] is false) then _sync method, model, options else true

      if _flag is true
        _call.call @

      else
        setTimeout (() => _call.call @), 300