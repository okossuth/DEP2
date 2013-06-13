define [
  'views/resources/ResourceBase',

  'views/period/GroupSectionBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend _.extend, {}, GroupSectionBase,
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
      @_clearHeader()

      @_clearFolding()

      true
      
    processScroll: (obj, val) ->
      _val = Math.min (obj.height - @MIN_BLOCK_HEIGHT), val

      @_animateHeader _val, val

      @_animateFolding _val, val

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