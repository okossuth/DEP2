define [
  'models/resources/ResourceBase',

  'collections/period/PeriodBlocks'

  'ovivo'
], (ResourceBase, PeriodBlocks) ->
  ResourceBase.extend
    _gettersNames: [
      'start'
      'end'
    ]

    _compilePeriodGroups: (period, start, end) ->
      if not (_groups = period.groups())? then return []

      _blocksInitial = period.compile start, end

      _.union.apply _, _.map _groups, (group) -> _blocksInitial.map (block) -> 
        block = _.clone block

        block.group = group
        block.code += ".#{group}"

        block

    addPeriod: (period) ->
      _blocks = @_compilePeriodGroups period, @start(), @end()

      @periodBlocks.add _blocks

    removePeriod: (period) ->
      _.each @periodBlocks.getBy('pk', period.pk()), (block) => @periodBlocks.remove block

    changePeriod: (period) ->
      _hash = {}

      _curBlocks = @periodBlocks.getBy('pk', period.pk())
      _curCodes = _.map _curBlocks, (block) -> block.code()

      _newBlocks = @_compilePeriodGroups period, @start(), @end()
      _newCodes = _.map _newBlocks, (block) ->
        _code = block.code

        _hash[_code] = block

        _code

      _remove = _.difference _curCodes, _newCodes
      _add = _.difference _newCodes, _curCodes

      _.each _remove, (code) => @periodBlocks.remove @periodBlocks.getBy('code', code)
      _.each _add, (code) => @periodBlocks.add _hash[code]

    addEvent: (event) ->
      _byDate = @periodBlocks.getBy 'dateKey', event.date()
      _bySkill = @periodBlocks.getBy 'skill', event.skill()

      _.each _.intersection(_byDate, _bySkill), (block) ->
        block.addEvent event

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      @periodBlocks = new PeriodBlocks [], options

      true