define [
  'models/resources/ResourceBase',

  'collections/period/PeriodBlocks',
  'collections/period/HoursBlocks'

  'ovivo'
], (ResourceBase, PeriodBlocks, HoursBlocks) ->
  ResourceBase.extend
    _gettersNames: [
      'start'
      'end'
      'mode'
    ]

    _compileGroups: (model, start, end, codeGenerator) ->
      if not (_groups = model.groups())? then return []

      _blocksInitial = model.compile start, end

      _.union.apply _, _.map _groups, (group) -> _blocksInitial.map (block) ->
        block = _.clone block

        block.group = group
        block.code += codeGenerator group, block

        block

    _changeModel: (model, compileMethod, collection) ->
      _hash = {}

      _curBlocks = collection.getBy('pk', model.pk())
      _curCodes = _.map _curBlocks, (block) -> block.code()

      _newBlocks = @[compileMethod] model, @start(), @end()
      _newCodes = _.map _newBlocks, (block) ->
        _code = block.code

        _hash[_code] = block

        _code

      _remove = _.difference _curCodes, _newCodes
      _add = _.difference _newCodes, _curCodes

      _.each _remove, (code) => collection.remove collection.getBy('code', code)
      _.each _add, (code) => collection.add _hash[code]

    _codeGeneratorPeriod: (group, block) ->
      ".#{group}.#{block.resourceNeed.start_time()}.#{block.resourceNeed.end_time()}.#{block.resourceNeed.skill()}"

    _codeGeneratorWorkingHour: (group, block) ->
      ".#{group}"

    _compilePeriodGroups: (period, start, end) -> @_compileGroups period, start, end, @_codeGeneratorPeriod

    _compileWorkingHoursGroups: (wh, start, end) -> @_compileGroups wh, start, end, @_codeGeneratorWorkingHour

    addWorkingHour: (wh) ->
      _blocks = @_compileWorkingHoursGroups wh, @start(), @end()

      @hoursBlocks.add _blocks

    removeWorkingHour: (wh) ->
      _.each @hoursBlocks.getBy('pk', wh.pk()), (block) => @hoursBlocks.remove block

    changeWorkingHour: (wh) ->
      @_changeModel wh, '_compileWorkingHoursGroups', @hoursBlocks

    addPeriod: (period) ->
      _blocks = @_compilePeriodGroups period, @start(), @end()

      @periodBlocks.add _blocks

    removePeriod: (period) ->
      _.each @periodBlocks.getBy('pk', period.pk()), (block) => @periodBlocks.remove block

    changePeriod: (period) -> @_changeModel period, '_compilePeriodGroups', @periodBlocks

    addEvent: (event) ->
      _byDate = @periodBlocks.getBy 'dateKey', event.date()
      _bySkill = @periodBlocks.getBy 'skill', event.skill()

      _.each _.intersection(_byDate, _bySkill), (block) ->
        block.addEvent event

    addEventEmployees: (event) ->
      if (event.dateObj > @end()) or (event.dateObj < @start()) then return

      @collector.view.addEvent event

    removeEventEmployees: (event) ->
      if (event.dateObj > @end()) or (event.dateObj < @start()) then return

      @collector.view.removeEvent event

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      @periodBlocks = new PeriodBlocks [], options
      @hoursBlocks = new HoursBlocks []

      true