define [
  'models/resources/ResourceBase',

  'views/resources/ResourceNeed',
  'views/resources/ResourceNeedEdit',

  '_features/validators',

  'ovivo'
], (ResourceBase, View, EditView, validators) ->
  ResourceBase.extend
    typeName: 'resourceNeed'

    _gettersNames: [
      'weekdays'
      'repeat'
      'start_time'
      'end_time'
      'pk'
      'deltaHours'
      'num_employees'
      'employee_type'
      'skill'
      'primary_department'
      'checked'
      'templates'
      'startValue'
      'endValue'
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
      # if (not model.changed.pk?) and @id? and (obj.socket_io isnt true) and (obj.cache_update isnt true) then @save()

    processModelChange: () ->

    toJSON: () ->
      _json = Backbone.Model.prototype.toJSON.call @

      if (_json.groups instanceof Array) and (_json.groups.length is 0) 
        @set 'groups', null, { silent: true }
        _json.groups = null

      delete _json.deltaHours
      delete _json.checked
      delete _json.templates
      delete _json.startValue
      delete _json.endValue

      _json

    changePrimaryDepartment: (model) ->
      _templates = @templates()

      if typeof _templates is 'object'
        _.each _.keys(_templates), (id) ->
          ovivo.desktop.resources.templates.get(id).removeResourceNeed model.id

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

    addTemplate: (id) ->
      _obj = _.extend {}, @templates()

      _obj[id] = true

      @set 'templates', _obj

    removeTemplate: (id) -> 
      _obj = _.extend {}, @templates()

      delete _obj[id]

      @set 'templates', _obj

    updateTimeValues: () ->
      @_startValue = @_getTimeValue @start_time()
      @_endValue = @_getTimeValue @end_time()

      if @_endValue < @_startValue then @_endValue += 24 * 60

      @set 'startValue', @_startValue
      @set 'endValue', @_endValue

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      @on 'change', @processChange, @
      @on 'change:weekdays', @updateWeekdaysHash, @

      @on 'change:primary_department', @changePrimaryDepartment, @

      @updateWeekdaysHash()

      @on 'change:start_time', @updateTimeValues, @
      @on 'change:end_time', @updateTimeValues, @

      @updateTimeValues()

      true