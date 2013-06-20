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
      'frame'
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

    addEvent: (event) ->
      _frame = @frame()
      if (event.dateObj > _frame.end()) or (event.dateObj < _frame.start()) then return

      if @employeesDef.state() isnt 'resolved' then return

      if @events[event.pk()]? then return

      @events[event.pk()] = event

      console.log 'added event', event

      true

    removeEvent: (event) ->
      if @employeesDef.state() isnt 'resolved' then return

      delete @events[event.pk()]

      console.log 'removed event', event

      true

    _initEvents: () -> ovivo.desktop.resources.events.def.done () =>
      _.each ovivo.desktop.resources.events.getBy({ 'skill': @pk(), 'group': @group()}), (e) => @addEvent e

    _initEmployees: (pk, group) -> ovivo.desktop.resources.users.def.done () =>
      _arr = ovivo.desktop.resources.users.getBy
        'skills': pk
        'groups': group

      if not (_arr instanceof Array) then return

      @skillEmployeeRows.add _.map _arr, (user) -> { user: user }

      @employeesDef.resolve()

    initialize: (attrs, options) ->
      @employeesDef = new $.Deferred()

      @View = View

      @events = {}

      @skillEmployeeRows = new SkillEmployeeRows()

      @_initEmployees attrs.pk, attrs.group

      @_blocksCounter = 0

      @proxyCall 'initialize', arguments

      @employeesDef.done _.bind @_initEvents, @

      true