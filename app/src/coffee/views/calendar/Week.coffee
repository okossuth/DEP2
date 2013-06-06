define [
  'views/calendar/DaysCollector',
  'views/resources/ResourceBase',

  'collections/period/ResourceNeedWeeks',

  '_features/binarySearch',

  'ovivo'
], (DaysCollector, ResourceBase, ResourceNeedWeeks, binarySearch) ->
  ResourceBase.extend _.extend {}, DaysCollector,
    common: {}

    template: Handlebars.templates['calendarWeek']
    groupTemplate: Handlebars.templates['calendarWeek_group']

    events: {}

    processScroll: (val, height) ->
      if @_scrollDataFlag is false 
        @_calcScrollData()

        if @_prev? then @_prev.model.clearScroll()

        @_prev = null

      @el.style.top = "#{-val}px"

      _res = binarySearch @_RNScrollData, val, @_RNComparator

      if _res isnt null
        _res.model.processScroll _res, val - _res.start

      if _res is @_prev then return

      if @_prev isnt null then @_prev.model.clearScroll()

      @_prev = _res

      true

    _RNComparator: (obj, val) ->
      return -1 if obj.start >= val 

      return 1 if obj.end < val 

      return 0

    _calcScrollData: () ->
      @scrollerInner.height @_offsetHeight = @el.offsetHeight

      @_RNScrollData = @resourceNeedWeeks.getScrollData()

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

    _updateScroll: _.throttle (() ->
      console.log 'ddd'
      # setTimeout (() => @scrollerInner.height @_offsetHeight = @el.offsetHeight), 500

      @_scrollDataFlag = false), 50

    initialize: () ->
      @frameInitDef = new $.Deferred()

      @_scrollDataFlag = false

      @resourceNeedWeeks = new ResourceNeedWeeks()

      @resourceNeedWeeks.week = @

      @resourceNeedWeeks.on 'add', @addResourceNeed, @

      @resourceNeedWeeks.on 'add', @_updateScroll, @
      @resourceNeedWeeks.on 'remove', @_updateScroll, @

      @model.on 'rendered', @_initFrame, @

      @proxyCall 'initialize', arguments

      @model.frame.periodBlocks.on 'add', @_updateScroll, @
      @model.frame.periodBlocks.on 'remove', @_updateScroll, @
      @model.frame.periodBlocks.on 'updateScroll', @_updateScroll, @

      @scroller = $('.page.page-calendar .scroller')
      @scrollerInner = $('.page.page-calendar .scroller .inner')

      true