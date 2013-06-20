define [
  'views/resources/ResourceBase',

  'views/period/GroupSectionBase',

  'ovivo'
], (ResourceBase, GroupSectionBase) ->
  ResourceBase.extend _.extend {}, GroupSectionBase,
    common: {}

    MIN_BLOCK_HEIGHT: 100

    tagName: 'li'
    className: 'time-group'

    template: Handlebars.templates['resourceNeedTimeGroup']
    groupTemplate: Handlebars.templates['resourceNeedTimeGroup_group']

    preventChangeRender: true

    events:
      'click': 'processClick'

    processClick: () ->

    clearScroll: () ->
      @_clearFolding()

      @timeRange.style.height = ''

      true

    processScroll: (obj, val) ->
      _val = Math.min (obj.height - @MIN_BLOCK_HEIGHT), val

      @timeRange.style.height = "#{obj.height - _val}px"

      if obj.last is true then return

      @_animateFolding _val, val

    addBlock: (block) ->

    postRender: () ->
      @resourceNeedWeeks = @$('.resource-needs-rows')
      @timeRange = @$('.time-range')[0]

      @addResourcNeedWeeks @model.resourceNeedWeeks.map (rnw) => rnw

      @model.resourceNeedWeeks.on 'add', @addResourcNeedWeeks, @

      @renderDef.resolve()

    addResourcNeedWeeks: (rnws) ->
      @_addViewSorted @resourceNeedWeeks, @model.resourceNeedWeeks, rnws

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true