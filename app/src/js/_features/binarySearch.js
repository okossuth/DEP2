define(['ovivo'], function() {
  return function(arr, val, comparator) {
    var _cur, _end, _shift, _start;
    if (arr.length < 1) {
      return null;
    }
    _start = 0;
    _end = arr.length - 1;
    if (comparator(arr[_start], val) === -1 || comparator(arr[_end], val) === 1) {
      return null;
    }
    while (true) {
      _cur = Math.floor((_start + _end) / 2);
      _shift = comparator(arr[_cur], val);
      if (_shift === 0) {
        return arr[_cur];
      }
      if (_start === _end) {
        return null;
      } else if (_shift === -1) {
        _end = _cur;
      } else if (_shift === 1) {
        _start = _cur + 1;
      } else {
        return null;
      }
    }
  };
});
