define [
  'views/period/PeriodBlock',

  'models/period/Block',

  'ovivo'
], (View, Block) ->
  Block.extend
    idAttribute: 'cid'

    _gettersNames: [
      'date',
      'hours',
      ['start_time', 'resourceNeed']
      ['end_time', 'resourceNeed']
      ['skill', 'resourceNeed']
      ['employee_type', 'resourceNeed']
      ['num_employees', 'resourceNeed']
      ['groups', 'period']
      ['pk', 'period']
      ['startValue', 'resourceNeed']
      ['endValue', 'resourceNeed']
    ]

    addHour: (hour, groups) ->
      _.each groups, (group) =>
        @groupsHash[group].push hour

        @view.updateGroup group

    tryHour: (hour, groups) ->
      _s = hour.startValue()
      _e = hour.endValue()

      _s1 = @startValue()
      _e1 = @endValue()

      if (_s <= _s1) and (_e >= _e1) 
        @addHour hour, groups

    initGroups: () ->
      @groupsHash = {}

      _.each @get('period').groups(), (group) => @groupsHash[group] = []

    initialize: () ->
      @View = View

      @initGroups()

      @proxyCall 'initialize', arguments

      true