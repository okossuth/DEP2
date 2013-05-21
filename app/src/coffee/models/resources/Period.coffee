define [
  'models/resources/ResourceBase',

  'views/resources/Period',

  '_features/RuleCompiler',

  'collections/period/PeriodBlocks',

  'ovivo'
], (ResourceBase, View, RuleCompiler, PeriodBlocks) ->
  ResourceBase.extend
    typeName: 'period'

    localStorageOnly: true

    _gettersNames: [
      'pk'
      'start_date'
      'end_date'
      'templates'
      'primary_department'
      'groups'
    ]

    changePD: () ->
      @set 'templates', []
      @set 'groups', []

    postEditSync: (collection, model, originalModel) -> @changeTemplates originalModel.templates()

    changeTemplates: (_prev) ->
      if not @id? then return true

      _cur = @templates()

      _removed = _.without.apply _, [_prev].concat _cur
      _new = _.without.apply _, [_cur].concat _prev

      _.each _removed, (id) =>
        ovivo.desktop.resources.templates.get(id).removePeriod @id

      _.each _new, (id) =>
        ovivo.desktop.resources.templates.get(id).addPeriod @id

    removeTemplate: (id) ->
      _val = []
      _arr = @templates()

      _.each _arr, (el) -> _val.push el

      _i = _val.indexOf id

      if _i isnt -1
        _val.splice _i, 1

      @set 'templates', _val

    compile: (start, end) ->
      if not start? then start = new Date Date.parse @start_date()
      if not end? then end = new Date Date.parse @end_date()

      _arr = []

      _.each _.map(@templates(), (tId) -> ovivo.desktop.resources.templates.get tId), (t) =>
        _.each _.map(t.resource_needs(), (rnId) -> ovivo.desktop.resources.resourceNeeds.get rnId), (rn) =>
          _arr = _arr.concat RuleCompiler.compile start, end, @start_date(), @end_date(), t.repeat(), rn.weekdaysHash,
            resourceNeed: rn
            template: t
            period: @

      _arr

    getBlocks: () ->
      @blocks = new PeriodBlocks()

      @blocks.add @compile()

      @hoursBlocks = ovivo.desktop.resources.workingHours.getBlocks @blocks.getKeys('skill'), @groups(), @start_date(), @end_date()

      @blocks.each (block) =>
        _skill = block.skill()
        _hours = @hoursBlocks.getBy 'date', block.date()

        _hours = _.filter _hours, (hour) -> 
          _flag = false
          _groups = []

          _.each block.groups(), (group) ->
            if hour.groupsHash[group] is true
              _groups.push group
              _flag = true

          if (_flag and (if hour.skillsHash[_skill] then true else false))
            block.tryHour hour, _groups

      @blocks

    initialize: (attrs, options) ->
      @View = View
      
      @on 'change:primary_department', @changePD, @

      @proxyCall 'initialize', arguments

      true