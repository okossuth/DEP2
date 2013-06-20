define [
], () ->
  year: () -> @get 'year'
  month: () -> @get 'month'

  isLeap: (year) ->
    if (year % 4) is 0
      if (year % 100) is 0
        if (year % 400) is 0
          true
        else false
      else true
    else false

  getNumberOfDaysInMonth: (month, year) ->
    if month isnt 1
      ovivo.config.DAYS_IN_MONTH[month]
    else if @isLeap(year) then 29 else 28

  setMonth: (value) ->
    value = if value > 11
      @setYear @year() + 1

      value % 12
    else if value < 0
      @setYear @year() - 1

      value % 12 + 12
    else value

    @set 'month', value

  setYear: (value) -> @set 'year', value

  transformDayOfWeek: (day) ->
    (day + 6) % 7

  _getWeekNumber: (d) ->
    d = new Date d

    d.setHours 0, 0, 0

    d.setDate d.getDate() + 4 - (d.getDay() || 7)

    yearStart = new Date d.getFullYear(), 0, 1
    weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7)

  getDaysArr: (weeks) -> Array.prototype.concat.apply [], weeks

  getWeeksArr: (year, month) ->
    _returnValue = []

    _year = if year? then year else @year()
    _month = if month? then month else @month()

    _prevYear = _year
    _nextYear = _year

    _prevMonth = _month - 1
    _nextMonth = _month + 1

    if _month is 0
      _prevYear = _year - 1
      _prevMonth = 11

    else if _month is 11
      _nextYear = _year + 1
      _nextMonth = 0

    _prevDaysNum = @getNumberOfDaysInMonth(_prevMonth, _prevYear)
    _nextDaysNum = @getNumberOfDaysInMonth(_nextMonth, _nextYear)
    _daysNum = @getNumberOfDaysInMonth(_month, _year)

    _weeks = []

    _firstDayOfMonth = @transformDayOfWeek (new Date _year, _month, 1).getDay()
    _lastDayOfMonth = @transformDayOfWeek (new Date _year, _month, _daysNum).getDay()

    _daysBefore = _firstDayOfMonth
    _daysAfter = 6 - _lastDayOfMonth

    if _daysBefore > 0
      _weeks = _weeks.concat (for _i in [_prevDaysNum - _daysBefore + 1.._prevDaysNum]
        date: _i
        month: _prevMonth
        year: _prevYear
        week_number: @_getWeekNumber(new Date(_prevYear, _prevMonth, _i))
        disabled: true)

    _weeks = _weeks.concat (for _i in [1.._daysNum]
      date: _i
      month: _month
      year: _year
      week_number: @_getWeekNumber(new Date(_year, _month, _i))
      disabled: false)

    if _daysAfter > 0
      _weeks = _weeks.concat (for _i in [1.._daysAfter]
        date: _i
        month: _nextMonth
        year: _nextYear
        week_number: @_getWeekNumber(new Date(_nextYear, _nextMonth, _i))
        disabled: true)

    if _weeks.length is 35
      _weeks = _weeks.concat (for _i in [1..7]
        date: _daysAfter + _i
        month: _nextMonth
        year: _nextYear
        week_number: @_getWeekNumber(new Date(_nextYear, _nextMonth, _daysAfter + _i))
        disabled: true)

    _returnValue = for _i in [0...(_weeks.length / 7)]
      _weeks.slice _i * 7, (_i + 1) * 7

    _returnValue