define [
  'models/resources/ResourceBase',

  'views/resources/WorkingHour',
  'views/resources/WorkingHourEdit',

  'ovivo'
], (ResourceBase, View, EditView) ->
  ResourceBase.extend
    typeName: 'workingHour'

    _gettersNames: [
      'weekdays'
      'available'
      'repeat'
      'exclusions'
      'groups'
      'start_date'
      'end_date'
      'start_time'
      'end_time'
      'pk'
      'start_date_obj'
      'end_date_obj'
      'deltaHours'
    ]

    _getTrueHash: (hash) -> _.compact _.map _.pairs(hash), (arr) -> if arr[1] is true then arr[0] else undefined

    processWeek: (num, value) ->
      value = !value

      @weekdaysHash[num] = value

      _weeks = @_getTrueHash(@weekdaysHash)

      @set 'weekdays', if _weeks.length > 0 then _weeks.join(',') else null

      true

    processGroup: (pk, value) ->
      value = !value

      @groupsHash[pk] = value

      _groups = @_getTrueHash(@groupsHash)

      @set 'groups', _.map _groups, (group) -> parseInt group

      true

    groups: () -> if (_groups = @.get('groups'))? then _groups else []

    validate: (attrs) -> 
      if attrs.available? and attrs.start_date? and attrs.start_time? and attrs.end_time? and attrs.weekdays? and attrs.repeat
        undefined

      else gettext('Params are missing')

    processChange: (model, obj) ->
      if @id? and (obj.socket_io isnt true) and (obj.cache_update isnt true) then @save()

    toJSON: () ->
      _json = Backbone.Model.prototype.toJSON.call @

      if (_json.groups instanceof Array) and (_json.groups.length is 0) 
        @set 'groups', null, { silent: true }
        _json.groups = null

      delete _json.exclusions
      delete _json.start_date_obj
      delete _json.end_date_obj
      delete _json.deltaHours

      _json

    processRange: (start, end) ->
      _arr = []

      _start = @start_date_obj()
      _startWeek = _start.getWeek()

      _end = @end_date_obj()

      _repeat = @repeat()

      if _start > start then start = _start
      if (_end)? and (_end < end) then end = _end

      _i = new Date start

      while _i <= end
        _day = _i.getDay() - 1
        if _day < 0 then _day = 7 + _day

        if (@weekdaysHash[_day] is true) and ((_repeat is 1) or (((Math.floor(_i - _start) / 86400000 / 7) % _repeat) is 0))
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
      @weekdaysHash = _.reduce @weekdays()?.split(','), ((memo, elem) -> memo[elem] = true; memo), {}

    updateStartDate: () ->
      @set 'start_date_obj', new Date Date.parse @start_date()

    updateEndDate: () ->
      if (_end_date = @end_date())? 
        @set 'end_date_obj', new Date Date.parse _end_date

      else 
        @set 'end_date_obj', undefined

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      @updateStartDate()
      @updateEndDate()

      @on 'change', @processChange, @
      @on 'change:group', @processChange, @
      @on 'change:weekdays', @updateWeekdaysHash, @

      @on 'change:start_date', @updateStartDate, @
      @on 'change:end_date', @updateEndDate, @

      @groupsHash = _.reduce @groups(), ((memo, elem) -> memo[elem] = true; memo), {}
      @updateWeekdaysHash()

      @editView = new EditView
        model: @

      true