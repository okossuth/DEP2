define [
  'views/period/PeriodBlock',

  'models/period/Block',

  'ovivo'
], (View, Block) ->
  Block.extend
    idAttribute: 'cid'

    _gettersNames: [
      'date'
      'hours'
      'resourceNeed'
      'template'
      'period'
      'code'
      'skill_name'
      'total_hours'
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

    initEvents: do ->
      _init = () ->
        _date = @date()
        _key = "#{_date.getFullYear()}-#{_date.getMonth()}-#{_date.getDate()}"

        console.log ovivo.desktop.resources.events.getBy 'date', _key

      () ->
        ovivo.desktop.resources.events.def.done _.bind _init, @

    initialize: () ->
      @View = if @collection.View? then @collection.View else View

      @initGroups()

      @proxyCall 'initialize', arguments

      @initEvents()

      _day = @date().getDay() - 1
      if _day is -1 then _day = 6

      @day = _day

      true