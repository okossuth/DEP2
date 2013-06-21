define [
  'models/resources/ResourceBase',

  '_features/RuleCompiler',

  'ovivo'
], (ResourceBase, RuleCompiler) ->
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
      'user'
      'skills'
      'pk'
      'startValue'
      'endValue'
    ]

    groups: () -> if (_groups = @get('groups'))? then _groups else []
    skills: () -> ovivo.desktop.resources.users.get(@user())?.skills()

    updateWeekdaysHash: () ->
      @weekdaysHash = _.reduce @weekdays()?.split(','), ((memo, elem) -> memo[parseInt(elem) - 1] = true; memo), {}

    updateGroupsHash: () ->
      @groupsHash = _.reduce @groups(), ((memo, elem) -> memo[parseInt(elem)] = true; memo), {}

    updateSkillsHash: () ->
      @skillsHash = _.reduce @skills(), ((memo, elem) -> memo[parseInt(elem)] = true; memo), {}

    _getTimeValue: (str) ->
      [_hours, _minutes] = str.split(':')

      [_hours, _minutes] = [parseInt(_hours), parseInt(_minutes)]

      _hours * 60 + _minutes

    _blockCodeGenerator: (obj) ->
      _date = obj.date

      "#{_date.getFullYear()}-#{_date.getMonth()}-#{_date.getDate()}.#{obj.workingHour.pk()}"

    compile: (start, end) ->
      start = new Date Date.parse start
      end = new Date Date.parse end

      _arr = RuleCompiler.compile start, end, @start_date(), @end_date(), @repeat(), @weekdaysHash,{
        workingHour: @
      }, @_blockCodeGenerator

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      @on 'change:weekdays', @updateWeekdaysHash, @

      @updateWeekdaysHash()
      @updateGroupsHash()

      ovivo.desktop.resources.users.def.done _.bind @updateSkillsHash, @

      @_startValue = @_getTimeValue @start_time()
      @_endValue = @_getTimeValue @end_time()

      if @endValue < @startValue then @endValue += 24 * 60

      @set 'startValue', @_startValue
      @set 'endValue', @_endValue

      true