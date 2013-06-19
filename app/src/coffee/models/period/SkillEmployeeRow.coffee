define [
  'models/resources/ResourceBase',

  'views/period/SkillEmployeeRow',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'user'
      ['pk', 'user']
      ['name', 'user']
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
      @set 'pk', attrs.user.pk()

      @View = View

      @_blocksCounter = 0

      @proxyCall 'initialize', arguments

      true