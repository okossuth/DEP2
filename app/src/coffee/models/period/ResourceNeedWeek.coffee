define [
  '_common/ToolsBase',

  'models/resources/ResourceBase',

  'views/period/ResourceNeedWeek',

  'ovivo'
], (ToolsBase, ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'resourceNeed'
      ['pk', 'resourceNeed']
      ['start_time', 'resourceNeed']
      ['end_time', 'resourceNeed']
    ]

    createGetters: do ->
      _nativeGetter = (_name) -> () -> @get _name

      _foreignGetter = (_arr) -> () -> @get(_arr[1])[_arr[0]]()

      (ToolsBase.once 'createGetters', () -> _.each @_gettersNames, (arr) => 
        _getter = (if typeof arr is 'string' then _nativeGetter else _foreignGetter) arr
        _name = if typeof arr is 'string' then arr else arr[0]

        if not @constructor.prototype[_name]? then @constructor.prototype[_name] = _getter)

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