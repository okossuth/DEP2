define [
  'collections/period/EventUsers',

  'views/period/PeriodBlock',

  'models/period/Block',

  'ovivo'
], (EventUsers, View, Block) ->
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
      'matched_employees'
      'matched_hours'
      'empty_slots'
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

    dateKey: () ->
      _date = @date()

      "#{_date.getFullYear()}-#{_date.getMonth()}-#{_date.getDate()}"

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
        _key = @dateKey()

        _byDate = ovivo.desktop.resources.events.getBy 'date', _key
        _bySkill = ovivo.desktop.resources.events.getBy 'skill', @skill()

        _.each _.intersection(_byDate, _bySkill), (event) =>
          @addEvent event

      () ->
        ovivo.desktop.resources.events.def.done _.bind _init, @

    removeAllEvents: () -> _.each _.values(@events), (event) => @removeEvent event

    refreshEvents: () ->
      @removeAllEvents()
      @initEvents()

    changeEvent: (event) ->
      @removeEvent event
      @addEvent event

    addEvent: (event) ->
      if not ((event.skill() is @skill()) and (event.start_time() is @start_time()) and (event.end_time() is @end_time()))
        return

      event.periodBlock = @

      @events[event.pk()] = event

      event.on 'change', @changeEvent, @

      ovivo.desktop.resources.users.def.done () =>
        _models = _.map event.users(), (obj) ->
          _user = ovivo.desktop.resources.users.get obj.pk

          event: event
          name: "#{_user.first_name()} #{_user.last_name()}"
          type: obj.type

        _.each _models, (obj) => @eventUsers.add obj

      @_updateMatchedValues()

      true

    removeEvent: (event) ->
      _remove = @eventUsers.getBy 'pk', event.pk()

      _.each _remove, (eventUser) => @eventUsers.remove eventUser

      event.off 'change', @changeEvent

      delete @events[event.pk()]
      delete event.periodBlock

      @_updateMatchedValues()

    _updateMatchedValues: () ->
      _closed = @eventUsers.getBy('type', 'closed')

      if @view._updateMatchedValues? then @view._updateMatchedValues _closed.length

    initialize: () ->
      @View = if @collection.View? then @collection.View else View

      @initGroups()

      @events = {}

      @eventUsers = new EventUsers()

      @proxyCall 'initialize', arguments

      @initEvents()

      _day = @date().getDay() - 1
      if _day is -1 then _day = 6

      @day = _day

      true