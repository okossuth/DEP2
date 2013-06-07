define [
  'ovivo'
], () ->
  localStorageCacheFunc: (funcName, func) ->

    if typeof window.localStorage is 'undefined'
      func

    else
      () ->
        _args = Array.prototype.slice.call arguments, 0
        _key = funcName + '-' + _.reduce(_args, ((str, arg) -> str + '-' + arg), '').slice 1

        if (_cached = localStorage[_key])?
          $.when(_cached)

        else
          _res = func.apply @, _args

          $.when(_res).done (res) -> localStorage[_key] = res

  proxyCall: (methodName, args) -> 
    _args = Array.prototype.slice.call args, 0
    _tail = Array.prototype.slice.call arguments, 2

    _args = _tail.concat _args

    @_base.prototype[methodName].apply @, _args

  once: (funcName, func) ->
    _flagPropertyName = "_callFlag-#{funcName}"
    
    () ->
      if @[_flagPropertyName] isnt true
        @[_flagPropertyName] = true

        func.apply @, Array.prototype.slice.call arguments, 0

      else undefined

  throttle: (func, limit) ->
    _prevCall = 0
    _timeout = null

    () ->
      _this = @
      
      _args = Array.prototype.slice.call arguments, 0

      if _timeout is null
        _timeout = setTimeout (() -> _timeout = null; func.apply _this, _args), limit

      true

  _resolveDef: (def) ->
    () ->
      def.resolve()

  bounceRepeater: (start, bounce, func) ->
    _func = (args, delay, iteration) ->
      _timeoutFunc = () =>
        func.apply @, args

        iteration -= 1

        if iteration is 0 then return

        delay *= 2

        setTimeout _timeoutFunc, delay

      setTimeout _timeoutFunc, delay

    () ->
      _args = Array.prototype.slice.call arguments, 0

      _func.call @, _args, start, bounce

  throttleGroup: (funcName, groupFuncName, limit) ->
    _processGroupCall = () ->
      @[groupFuncName] @common.calls

      delete @common.timer

    () ->
      _args = Array.prototype.slice.call arguments, 0

      if @doNotThrottleGroup is true
        @["_#{funcName}"].apply @, _args

      else if typeof @common.timer is 'undefined'
        @["_#{funcName}"].apply @, _args

        @common.calls = []

        @common.timer = setTimeout _.bind(_processGroupCall, @), 50

      else
        @common.calls.push
          ctx: @
          args: _args