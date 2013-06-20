define [
  'views/calendar/DaysCollector',
  'views/calendar/WeekEmployees',
  'views/resources/ResourceBase',

  'collections/period/PeriodGroups',
  'collections/period/GroupFilters',

  '_common/ToolsBase',

  'ovivo'
], (DaysCollector, WeekEmployees, ResourceBase, PeriodGroups, GroupFilters, ToolsBase) ->
  ResourceBase.extend _.extend {}, DaysCollector, WeekEmployees,
    common: {}

    template: Handlebars.templates['calendarWeek']
    groupTemplate: Handlebars.templates['calendarWeek_group']

    events: {}

    processScroll: (val, height) ->
      if @_scrollDataFlag is false
        @_calcScrollData()

      if ovivo.config.TRANSFORM isnt false
        @container[0].style[ovivo.config.TRANSFORM] = "translate(0, #{-val}px)"

      else
        @container[0].style.top = "#{-val}px"

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

    addBlock: (block) -> ovivo.desktop.resources.groups.def.done () =>
      _periodGroup = @periodGroups.get block.group()

      if not _periodGroup? then _periodGroup = @periodGroups.addModel
        pk: block.group()
        frame: @model.frame

      _periodGroup.addBlock block

    removeBlock: (block) ->
      _periodGroup = @periodGroups.get block.group()

      if _periodGroup? then _periodGroup.removeBlock block

    _initFrameMode: () ->
      @periodGroups.mode = @model.frame.mode()
      
    _initFrame: () ->
      @addBlocks @model.frame.periodBlocks.map (b) -> b

      @model.frame.periodBlocks.on 'add', @addBlock, @
      @model.frame.periodBlocks.on 'remove', @removeBlock, @

      @container = @$('.period-groups')

      @frameInitDef.resolve()

    postRender: () ->
      @groupsList = @$('.groups-list')

      @addGroupFilters @groupFilters.map (f) -> f

      @groupFilters.on 'add', @addGroupFilters, @

    addPeriodGroup: (model) ->
      @frameInitDef.done => @container.append model.view.$el

    addGroupFilters: (models) ->
      @_addViewSorted @groupsList, @groupFilters, models

    _updateScrollThrottledRepeater: _.throttle (ToolsBase.bounceRepeater 50, 3, () -> 
      @scrollerInner.height @_offsetHeight = @el.offsetHeight

      @_scrollDataFlag = false), 100

    _updateScroll: () ->
      if @model.visible then @_updateScrollThrottledRepeater()

    _processFilterApply: () -> @model.collection.page._postNavigate()

    _processMode: () ->
      @periodGroups.setMode @model.frame.mode()

      @_updateScroll()

    _renderMode: () ->
      _mode = @model.frame.mode()
      _prevMode = @model.frame.previous 'mode'

      @$el.removeClass("#{_prevMode}-mode").addClass "#{_mode}-mode"

    initialize: () ->
      @frameInitDef = new $.Deferred()

      @_scrollDataFlag = false

      @periodGroups = new PeriodGroups()

      @groupFilters = new GroupFilters [],
        periodGroups: @periodGroups

      @groupFilters.on 'apply', @_processFilterApply, @

      @periodGroups.week = @

      @periodGroups.on 'add', @addPeriodGroup, @

      @periodGroups.on 'add', @_updateScroll, @
      @periodGroups.on 'remove', @_updateScroll, @

      @model.on 'rendered', @_initFrameMode, @
      @model.on 'rendered', @_initFrame, @

      @proxyCall 'initialize', arguments

      @model.frame.periodBlocks.on 'add', @_updateScroll, @
      @model.frame.periodBlocks.on 'remove', @_updateScroll, @
      @model.frame.periodBlocks.on 'updateScroll', @_updateScroll, @

      @_renderMode()
      @model.frame.on 'change:mode', @_renderMode, @
      @model.frame.on 'change:mode', @_processMode, @

      @scroller = $('.page.page-calendar .scroller')
      @scrollerInner = $('.page.page-calendar .scroller .inner')

      true