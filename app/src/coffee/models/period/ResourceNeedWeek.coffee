define [
  'models/resources/ResourceBase',

  'views/period/ResourceNeedWeek',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'resourceNeed'
      ['pk', 'resourceNeed']
      ['start_time', 'resourceNeed']
      ['end_time', 'resourceNeed']
    ]

    clearScroll: () -> @view.clearScroll()

    processScroll: (obj, val) -> @view.processScroll obj, val

    addBlock: (block) ->
      @view.addBlock block

      @_blocksCounter += 1

    removeBlock: (block) ->
      @_blocksCounter -= 1

      if @_blocksCounter is 0
        @collection.remove @

    initialize: (attrs, options) ->
      @View = View

      @_blocksCounter = 0

      @proxyCall 'initialize', arguments

      true