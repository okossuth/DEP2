define [
  'views/calendar/DaysCollector',
  'views/resources/ResourceBase',

  'collections/period/ResourceNeedWeeks',

  'ovivo'
], (DaysCollector, ResourceBase, ResourceNeedWeeks) ->
  ResourceBase.extend _.extend {}, DaysCollector,
    common: {}

    template: Handlebars.templates['calendarWeek']
    groupTemplate: Handlebars.templates['calendarWeek_group']

    events: {}

    processScroll: (val, height) ->
      if @_scrollDataFlag is false then @_calcScrollData()

      console.log @number(), val, height, @_offsetHeight

    _calcScrollData: () ->
      console.log 'Offset height', @_offsetHeight = @el.offsetHeight

      console.log 'RN scroll data', @_RNScrollData = @resourceNeedWeeks.getScrollData()

      @_scrollDataFlag = true

      true

    days: () -> @model.days

    addBlocks: (arr) ->
      _.each arr, (block) => @addBlock block

    removeBlocks: (arr) ->
      _.each arr, (block) => @removeBlock block

    addBlock: (block) ->
      _rn = @resourceNeedWeeks.getBy('pk', block.resourceNeed().pk())[0]

      if not _rn? then _rn = @resourceNeedWeeks.addModel
        resourceNeed: block.resourceNeed()

      _rn.addBlock block

    removeBlock: (block) ->
      _rn = @resourceNeedWeeks.getBy('pk', block.resourceNeed().pk())[0]

      if _rn? then _rn.removeBlock block
      
    _initFrame: () ->
      @addBlocks @model.frame.periodBlocks.map (b) -> b

      @model.frame.periodBlocks.on 'add', @addBlock, @
      @model.frame.periodBlocks.on 'remove', @removeBlock, @

      @container = @$('.resource-needs-rows')

      @frameInitDef.resolve()

    addResourceNeed: (model) ->
      @frameInitDef.done => @container.append model.view.$el

    initialize: () ->
      @frameInitDef = new $.Deferred()

      @_scrollDataFlag = false

      @resourceNeedWeeks = new ResourceNeedWeeks()

      @resourceNeedWeeks.on 'add', @addResourceNeed, @

      @model.on 'rendered', @_initFrame, @

      @proxyCall 'initialize', arguments

      @model.frame.periodBlocks.on 'updateScroll', @_calcScrollData, @

      true