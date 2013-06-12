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
      @el.style.opacity = ''

      @$el.removeClass 'folding'

      @timeRange.style.height = ''

      if ovivo.config.TRANSFORM isnt false
        @el.style[ovivo.config.TRANSFORM] = ''

      true
      
    processScroll: (obj, val) ->
      _height = obj.height - @MIN_BLOCK_HEIGHT
      _val = Math.min (obj.height - @MIN_BLOCK_HEIGHT), val

      @timeRange.style.height = "#{obj.height - _val}px"

      if obj.last is true then return

      if _val isnt val
        _frac = (val - _val) / @MIN_BLOCK_HEIGHT

        @el.style.opacity = Math.pow(1 - _frac, 2)

        @$el.addClass 'folding'

        if ovivo.config.TRANSFORM isnt false
          @el.style[ovivo.config.TRANSFORM] = "translate(0, #{@MIN_BLOCK_HEIGHT * _frac}px) scale(#{1 - 0.05 * Math.pow(_frac, 2)}) rotateX(#{60 * Math.pow(_frac, 2)}deg)"

      else
        @$el.removeClass 'folding'

        @el.style.opacity = ''

        if ovivo.config.TRANSFORM isnt false
          @el.style[ovivo.config.TRANSFORM] = ''

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