define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    MIN_BLOCK_HEIGHT: 148

    tagName: 'li'
    className: 'period-group'

    template: Handlebars.templates['periodGroup']
    groupTemplate: Handlebars.templates['periodGroup_group']

    preventChangeRender: true

    events:
      'click': 'processClick'

    processClick: () ->

    clearScroll: () ->
      if ovivo.config.TRANSFORM isnt false
        @header.style[ovivo.config.TRANSFORM] = ''

      else
        @header.style.top = ''

      if ovivo.config.TRANSFORM isnt false
          @el.style[ovivo.config.TRANSFORM] = ''

      true
      
    processScroll: (obj, val) ->
      _height = obj.height - @MIN_BLOCK_HEIGHT
      _val = Math.min (obj.height - @MIN_BLOCK_HEIGHT), val

      if ovivo.config.TRANSFORM isnt false
        @header.style[ovivo.config.TRANSFORM] = "translate(0, #{_val}px)"

      else
        @header.style.top = "#{_val}px"

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

      true

    addBlock: (block) ->

    _renderGroup: () ->
      @$('.group-name').html ovivo.desktop.resources.groups.get(@pk()).chainName()

    postRender: () ->
      ovivo.desktop.resources.groups.def.done _.bind @_renderGroup, @

      @timeGroups = @$('.time-groups')
      @header = @$('h1.title')[0]

      @addTimeGroups @model.timeGroups.map (t) => t

      @model.timeGroups.on 'add', @addTimeGroups, @

      @renderDef.resolve()

    addTimeGroups: (timeGroups) ->
      @_addViewSorted @timeGroups, @model.timeGroups, timeGroups

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true