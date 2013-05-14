define [
  'models/resources/ResourceBase',

  'views/resources/ResourceNeed',
  'views/resources/ResourceNeedEdit',

  '_features/validators',

  'ovivo'
], (ResourceBase, View, EditView, validators) ->
  ResourceBase.extend
    typeName: 'resourceNeed'

    localStorageOnly: true

    _gettersNames: [
      'weekdays'
      'start_time'
      'end_time'
      'pk'
      'deltaHours'
      'num_employees'
      'employee_type'
      'skill'
      'primary_department'
      'checked'
    ]

    _getTrueHash: (hash) -> _.compact _.map _.pairs(hash), (arr) -> if arr[1] is true then (parseInt(arr[0]) + 1) else undefined

    processWeek: (num, value) ->
      value = !value

      @weekdaysHash[num] = value

      _weeks = @_getTrueHash(@weekdaysHash)

      @set 'weekdays', if _weeks.length > 0 then _weeks.join(',') else null

      true

    validate: (attrs) -> 
      if attrs.available? and attrs.start_time? and attrs.end_time? and attrs.weekdays?
        undefined

      else gettext('Params are missing')

    validate: (attrs) ->
      _.reduce [{
          name: 'start_time',
          value: attrs.start_time,
          validator: 'time'
        }, {
          name: 'end_time',
          value: attrs.end_time,
          validator: 'time'
        }, {
          name: 'num_employees',
          value: attrs.num_employees,
          validator: 'number'
      }], ((memo, obj) =>
        if typeof memo isnt 'undefined'
          memo
        else
          validators[obj.validator] obj.name, obj.value
        ), undefined

    processChange: (model, obj) ->
      if (not model.changed.pk?) and @id? and (obj.socket_io isnt true) and (obj.cache_update isnt true) then @save()

    processModelChange: () ->

    toJSON: () ->
      _json = Backbone.Model.prototype.toJSON.call @

      if (_json.groups instanceof Array) and (_json.groups.length is 0) 
        @set 'groups', null, { silent: true }
        _json.groups = null

      delete _json.deltaHours
      delete _json.checked

      _json

    processRange: (start, end) ->
      _arr = []

      _start = @start_date_obj()
      _startWeek = _start.getWeek()

      _startMonday = new Date(_start)

      if _startMonday.getDay() isnt 1
        _startMonday.moveToDayOfWeek(1, -1)

      _end = @end_date_obj()

      _repeat = @repeat()

      if _start > start then start = _start
      if (_end)? and (_end < end) then end = _end

      _i = new Date start

      while _i <= end
        _day = _i.getDay() - 1
        if _day < 0 then _day = 7 + _day

        if (@weekdaysHash[_day] is true) and ((_repeat is 1) or (((Math.floor((_i - _startMonday) / 86400000 / 7)) % _repeat) is 0))
          _arr.push
            date: new Date _i
            model: @

        _i.setDate _i.getDate() + 1

      _arr

    setDeltaHours: do () ->
      _getMinutes = (str) ->
        [hours, minutes] = _.compact(ovivo.config.VALIDATION_REGEXP_TIME.exec(str)).slice -2
        [hours, minutes] = [parseInt(hours), parseInt(minutes)]

        hours * 60 + minutes

      () -> 
        _end = _getMinutes(@end_time())
        _start = _getMinutes(@start_time())

        if _start <= _end
          _delta = (_end - _start) / 60

        else 
          _delta = (_end - _start) / 60 + 24

        @set 'deltaHours', Math.round _delta

    updateWeekdaysHash: () ->
      @weekdaysHash = _.reduce @weekdays()?.split(','), ((memo, elem) -> memo[parseInt(elem) - 1] = true; memo), {}

    _getTimeValue: (str) ->
      [_hours, _minutes] = str.split(':')

      [_hours, _minutes] = [parseInt(_hours), parseInt(_minutes)]

      _hours * 60 + _minutes

    getEditView: (name) -> 
      @[name] = new EditView
        model: @

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      @on 'change', @processChange, @
      @on 'change:weekdays', @updateWeekdaysHash, @

      @updateWeekdaysHash()

      @startValue = @_getTimeValue @start_time()
      @endValue = @_getTimeValue @end_time()

      if @endValue < @startValue then @endValue += 24 * 60

      true