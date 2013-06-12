define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    MIN_BLOCK_HEIGHT: 100

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
      
    processScroll: (obj, val) ->
      _height = obj.height - @MIN_BLOCK_HEIGHT
      _val = Math.min (obj.height - @MIN_BLOCK_HEIGHT), val

      if ovivo.config.TRANSFORM isnt false
        @header.style[ovivo.config.TRANSFORM] = "translate(0, #{_val}px)"

      else
        @header.style.top = "#{_val}px"

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