define(['ovivo'], function() {
  return {
    compile: function(start, end, start_date, end_date, repeat, weekdaysHash, models, codeGen) {
      var _arr, _day, _end, _i, _obj, _start, _startMonday, _startWeek;
      _arr = [];
      _start = new Date(Date.parse(start_date));
      _startWeek = _start.getWeek();
      _startMonday = new Date(_start);
      if (_startMonday.getDay() !== 1) {
        _startMonday.moveToDayOfWeek(1, -1);
      }
      _end = end_date != null ? new Date(Date.parse(end_date)) : null;
      if (_start > start) {
        start = _start;
      }
      if ((_end != null) && (_end < end)) {
        end = _end;
      }
      _i = new Date(start);
      while (_i <= end) {
        _day = _i.getDay() - 1;
        if (_day < 0) {
          _day = 7 + _day;
        }
        if ((weekdaysHash[_day] === true) && ((repeat === 1) || (((Math.floor((_i - _startMonday) / 86400000 / 7)) % repeat) === 0))) {
          _obj = _.extend({}, models, {
            date: new Date(_i)
          });
          if (codeGen != null) {
            _obj.code = codeGen(_obj);
          }
          _arr.push(_obj);
        }
        _i.setDate(_i.getDate() + 1);
      }
      return _arr;
    }
  };
});
