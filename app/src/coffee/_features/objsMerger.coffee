define [
  'ovivo'
], () ->
  funcMerge: () ->
    _objs = Array.prototype.slice.call arguments, 0

    _hash = {}

    _.each _objs, (obj) -> _.each _.filter(_.keys(obj), (key) -> typeof obj[key] is 'function'), (key) ->
      if (_arr = _hash[key]) is undefined then _arr = _hash[key] = []

      _arr.push obj[key]

      delete obj[key]

    _res = _.extend.apply _, [{}].concat _objs

    _.each _hash, (arr, key) ->
      if arr.length is 1 then _res[key] = arr[0]; return

      _res[key] = () -> 
        _args = arguments

        _.map(arr, (func) => func.apply @, _args)[0]

    _res