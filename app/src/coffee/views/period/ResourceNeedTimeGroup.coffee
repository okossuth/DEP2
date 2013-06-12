define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
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
      @timeRange.style.height = ''
      
    processScroll: (obj, val) ->
      _height = obj.height - @MIN_BLOCK_HEIGHT
      _val = Math.min (obj.height - @MIN_BLOCK_HEIGHT), val

      @timeRange.style.height = "#{obj.height - _val}px"

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