define [
  '_features/objsMerger',

  'models/resources/ResourceBase',
  'models/period/PeriodGroupEmployees',

  'collections/period/ResourceNeedTimeGroups',

  'views/period/PeriodGroup',

  'ovivo'
], (objsMerger, ResourceBase, PeriodGroupEmployees, TimeGroups, View) ->
  ResourceBase.extend objsMerger.funcMerge PeriodGroupEmployees,
    _gettersNames: [
      'pk'
      'root'
      'visible'
      'frame'
    ]

    clearScroll: () -> @view.clearScroll()

    processScroll: (obj, val) -> @view.processScroll obj, val

    addBlocks: (blocks) -> _.each blocks, (b) => @addBlock b

    _addBlockPartial: (block) ->
      _key = "#{block.start_time()}-#{block.end_time()}".replace /\:/g, '-'

      _timeGroup = @timeGroups.get _key

      if not _timeGroup? then _timeGroup = @timeGroups.addModel
        pk: _key
        start_time: block.start_time()
        end_time: block.end_time()
        startValue: block.resourceNeed().startValue()

      _timeGroup.addBlock block

    addBlock: (block) ->
      if @_blocksHash[block.cid]? then return

      @_blocksHash[block.cid] = block
      @_blocksHashCounter[block.cid] = block

      @_addBlockPartial block

    addBlockHidden: (block) ->
      @_blocksHashCounter[block.cid] = block

    _removeBlockPartial: (block) ->
      _timeGroup = block.timeGroup

      if _timeGroup? then _timeGroup.removeBlock block

    removeBlock: (block) ->
      @_removeBlockPartial block

      delete @_blocksHash[block.cid]
      delete @_blocksHashCounter[block.cid]

      if _.keys(@_blocksHashCounter).length is 0
        @collection.remove @

    processVisibility: () ->
      if @_periodsInitFlag is false and @visible() is true
        @_periodsInitFlag = true
        
        _blocks = @frame().periodBlocks.getBy 'group', @pk()

        @addBlocks _blocks

    initialize: (attrs, options) ->
      @View = View

      @_periodsInitFlag = false

      @on 'change:visible', @processVisibility, @

      @timeGroups = new TimeGroups()
      @timeGroups.periodGroup = @

      @_blocksHash = {}
      @_blocksHashCounter = {}

      @proxyCall 'initialize', arguments

      @set 'root', ovivo.desktop.resources.groups.get(@pk()).pkRoot()

      true