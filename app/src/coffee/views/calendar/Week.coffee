define [
  'views/calendar/DaysCollector',
  'views/resources/ResourceBase',

  'collections/period/PeriodGroups',
  'collections/period/GroupFilters',

  '_common/ToolsBase',

  'ovivo'
], (DaysCollector, ResourceBase, PeriodGroups, GroupFilters, ToolsBase) ->
  ResourceBase.extend _.extend {}, DaysCollector,
    common: {}

    template: Handlebars.templates['calendarWeek']
    groupTemplate: Handlebars.templates['calendarWeek_group']

    events: {}

    processScroll: (val, height) ->
      if @_scrollDataFlag is false
        @_calcScrollData()

      @el.style.top = "#{-val}px"

      @periodGroups.processScroll val, height

      true

    _calcScrollData: () ->
      @scrollerInner.height @_offsetHeight = @el.offsetHeight

      @periodGroups.calcScrollData()

      @_scrollDataFlag = true

      true

    days: () -> @model.days

    addBlocks: (arr) ->
      _.each arr, (block) => @addBlock block

    removeBlocks: (arr) ->
      _.each arr, (block) => @removeBlock block

    addBlock: (block) ->
      _periodGroup = @periodGroups.get block.group()

      if not _periodGroup? then _periodGroup = @periodGroups.addModel
        pk: block.group()

      _periodGroup.addBlock block

    removeBlock: (block) ->
      _periodGroup = @periodGroups.get block.group()

      if _periodGroup? then _periodGroup.removeBlock block
      
    _initFrame: () ->
      @addBlocks @model.frame.periodBlocks.map (b) -> b

      @model.frame.periodBlocks.on 'add', @addBlock, @
      @model.frame.periodBlocks.on 'remove', @removeBlock, @

      @container = @$('.period-groups')

      @frameInitDef.resolve()

    addPeriodGroup: (model) ->
      @frameInitDef.done => @container.append model.view.$el

    _updateScrollThrottledRepeater: _.throttle (ToolsBase.bounceRepeater 50, 3, () -> 
      @scrollerInner.height @_offsetHeight = @el.offsetHeight

      @_scrollDataFlag = false), 100

    _updateScroll: () ->
      if @model.visible then @_updateScrollThrottledRepeater()

    initialize: () ->
      @frameInitDef = new $.Deferred()

      @_scrollDataFlag = false

      @periodGroups = new PeriodGroups()

      @groupFilters = new GroupFilters [],
        periodGroups: @periodGroups

      @periodGroups.week = @

      @periodGroups.on 'add', @addPeriodGroup, @

      @periodGroups.on 'add', @_updateScroll, @
      @periodGroups.on 'remove', @_updateScroll, @

      @model.on 'rendered', @_initFrame, @

      @proxyCall 'initialize', arguments

      @model.frame.periodBlocks.on 'add', @_updateScroll, @
      @model.frame.periodBlocks.on 'remove', @_updateScroll, @
      @model.frame.periodBlocks.on 'updateScroll', @_updateScroll, @

      @scroller = $('.page.page-calendar .scroller')
      @scrollerInner = $('.page.page-calendar .scroller .inner')

      true