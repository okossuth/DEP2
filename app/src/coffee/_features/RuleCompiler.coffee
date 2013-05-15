define [
  'ovivo'
], () ->
  compile: (model, start, end, start_date, end_date, repeat, weekdaysHash) ->
    _arr = []

    _start = new Date Date.parse start_date
    _startWeek = _start.getWeek()

    _startMonday = new Date(_start)

    if _startMonday.getDay() isnt 1
      _startMonday.moveToDayOfWeek(1, -1)

    _end = new Date Date.parse end_date

    if _start > start then start = _start
    if (_end)? and (_end < end) then end = _end

    _i = new Date start

    while _i <= end
      _day = _i.getDay() - 1
      if _day < 0 then _day = 7 + _day

      if (weekdaysHash[_day] is true) and ((repeat is 1) or (((Math.floor((_i - _startMonday) / 86400000 / 7)) % repeat) is 0))
        _arr.push
          date: new Date _i
          model: model

      _i.setDate _i.getDate() + 1

    _arr