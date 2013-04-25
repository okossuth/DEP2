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

    processChange: () ->
      if @id? then @save()

    toJSON: () ->
      _json = Backbone.Model.prototype.toJSON.call @

      if (_json.groups instanceof Array) and (_json.groups.length is 0) 
        @set 'groups', null, { silent: true }
        _json.groups = null

      delete _json.exclusions

      _json

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      @on 'change', @processChange, @
      @on 'change:group', @processChange, @

      @groupsHash = _.reduce @groups(), ((memo, elem) -> memo[elem] = true; memo), {}
      @weekdaysHash = _.reduce @weekdays()?.split(','), ((memo, elem) -> memo[elem] = true; memo), {}

      true