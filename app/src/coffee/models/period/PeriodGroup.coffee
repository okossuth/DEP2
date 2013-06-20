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

    addBlock: (block) ->
      _key = "#{block.start_time()}-#{block.end_time()}".replace /\:/g, '-'

      _timeGroup = @timeGroups.get _key

      if not _timeGroup? then _timeGroup = @timeGroups.addModel
        pk: _key
        start_time: block.start_time()
        end_time: block.end_time()
        startValue: block.resourceNeed().startValue()

      _timeGroup.addBlock block

      @_blocksCounter += 1

    _removeBlockPartial: (block) ->
      _timeGroup = block.timeGroup

      if _timeGroup? then _timeGroup.removeBlock block

    removeBlock: (block) ->
      @_removeBlockPartial block

      @_blocksCounter -= 1

      if @_blocksCounter is 0
        @collection.remove @

    initialize: (attrs, options) ->
      @View = View

      @timeGroups = new TimeGroups()
      @timeGroups.periodGroup = @

      @_blocksCounter = 0

      @proxyCall 'initialize', arguments

      @set 'root', ovivo.desktop.resources.groups.get(@pk()).pkRoot()

      true