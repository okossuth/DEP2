define [
  'ovivo'
], () ->
  (arr, val, comparator) ->
    return null if arr.length < 1

    _start = 0
    _end = arr.length - 1

    return null if comparator(arr[_start], val) is -1 or comparator(arr[_end], val) is 1

    loop
      _cur = Math.floor (_start + _end) / 2
      _shift = comparator arr[_cur], val

      if _shift is 0
        return arr[_cur]

      if _start is _end
        return null

      else if _shift is -1
        _end = _cur

      else if _shift is 1
        _start = _cur + 1

      else
        return null