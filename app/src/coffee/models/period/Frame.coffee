define [
  'models/resources/ResourceBase',

  'collections/period/PeriodBlocks',

  'ovivo'
], (ResourceBase, PeriodBlocks) ->
  ResourceBase.extend
    _gettersNames: [
      'start'
      'end'
    ]

    addPeriod: (period) ->
      _blocks = period.compile @start(), @end()

      @periodBlocks.add _blocks

    removePeriod: (period) ->
      _.each @periodBlocks.getBy('pk', period.pk()), (block) => @periodBlocks.remove block

    changePeriod: (period) ->
      _hash = {}

      _curBlocks = @periodBlocks.getBy('pk', period.pk())
      _curCodes = _.map _curBlocks, (block) -> block.code()

      _newBlocks = period.compile @start(), @end()
      _newCodes = _.map _newBlocks, (block) -> 
        _code = block.code

        _hash[_code] = block

        _code

      _remove = _.difference _curCodes, _newCodes
      _add = _.difference _newCodes, _curCodes

      _.each _remove, (code) => @periodBlocks.remove @periodBlocks.getBy('code', code)
      _.each _add, (code) => @periodBlocks.add _hash[code]

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      @periodBlocks = new PeriodBlocks()

      true