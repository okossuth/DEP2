define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'period-group'

    template: Handlebars.templates['periodGroup']
    groupTemplate: Handlebars.templates['periodGroup_group']

    preventChangeRender: true

    events:
      'click': 'processClick'

    processClick: () ->

    clearScroll: () ->
      
    processScroll: (obj, val) ->

    addBlock: (block) ->

    _renderGroup: () ->
      @$('.group-name').html ovivo.desktop.resources.groups.get(@pk()).chainName()

    postRender: () ->
      ovivo.desktop.resources.groups.def.done _.bind @_renderGroup, @

      @timeGroups = @$('.time-groups')

      @addTimeGroups @model.timeGroups.map (t) => t

      @model.timeGroups.on 'add', @addTimeGroups, @

      @renderDef.resolve()

    addTimeGroups: (timeGroups) ->
      @_addViewSorted @timeGroups, @model.timeGroups, timeGroups

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true