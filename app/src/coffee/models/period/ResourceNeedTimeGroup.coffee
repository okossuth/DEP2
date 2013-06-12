define [
  'models/resources/ResourceBase',

  'collections/period/ResourceNeedWeeks',

  'views/period/ResourceNeedTimeGroup',

  'ovivo'
], (ResourceBase, ResourceNeedWeeks, View) ->
  ResourceBase.extend
    _gettersNames: [
      'pk'
      'start_time'
      'end_time'
    ]

    clearScroll: () -> @view.clearScroll()

    processScroll: (obj, val) -> @view.processScroll obj, val

    addBlock: (block) ->
      block.timeGroup = @

      _rn = block.resourceNeed()
      _resourceNeedWeek = @resourceNeedWeeks.get _rn.pk()

      if not _resourceNeedWeek? then _resourceNeedWeek = @resourceNeedWeeks.addModel
        resourceNeed: _rn

      _resourceNeedWeek.addBlock block

      @_blocksCounter += 1

    removeBlock: (block) ->
      delete block.timeGroup

      _resourceNeedWeek = @resourceNeedWeeks.get block.resourceNeed().pk()

      if _resourceNeedWeek? then _resourceNeedWeek.removeBlock block

      @_blocksCounter -= 1

      if @_blocksCounter is 0
        @collection.remove @

    initialize: (attrs, options) ->
      @View = View

      @resourceNeedWeeks = new ResourceNeedWeeks()

      @_blocksCounter = 0

      @proxyCall 'initialize', arguments

      true