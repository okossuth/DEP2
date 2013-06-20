define [
  'collections/period/SkillEmployeeRows',

  'models/resources/ResourceBase',

  'views/period/SkillGroup',

  'ovivo'
], (SkillEmployeeRows, ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'pk'
      'group'
    ]

    clearScroll: () -> @view.clearScroll()

    processScroll: (obj, val) -> @view.processScroll obj, val

    addBlock: (block) ->
      @_blocksCounter += 1

    removeBlock: (block) ->
      console.log @_blocksCounter -= 1

      if @_blocksCounter is 0
        @collection.remove @

    _initEmployees: (pk, group) -> ovivo.desktop.resources.users.def.done () =>
      _arr = ovivo.desktop.resources.users.getBy 
        'skills': pk
        'groups': group

      if not (_arr instanceof Array) then return

      @skillEmployeeRows.add _.map _arr, (user) -> { user: user }

    initialize: (attrs, options) ->
      @View = View

      @skillEmployeeRows = new SkillEmployeeRows()

      @_initEmployees attrs.pk, attrs.group

      @_blocksCounter = 0

      @proxyCall 'initialize', arguments

      true