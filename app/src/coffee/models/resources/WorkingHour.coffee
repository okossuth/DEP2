define [
  'models/resources/ResourceBase',

  'views/resources/WorkingHour',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
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

    getView: () -> new @View
      model: @

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      @set 'start_date_obj', new Date Date.parse @start_date()
      
      if (_end_date = @end_date())? then @set 'end_date_obj', new Date Date.parse _end_date

      @on 'change', @processChange, @
      @on 'change:group', @processChange, @

      @groupsHash = _.reduce @groups(), ((memo, elem) -> memo[elem] = true; memo), {}
      @weekdaysHash = _.reduce @weekdays()?.split(','), ((memo, elem) -> memo[elem] = true; memo), {}

      true