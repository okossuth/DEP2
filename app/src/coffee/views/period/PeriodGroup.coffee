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
      @$('.group-name').html ovivo.desktop.resources.groups.get(@pk()).name()

    postRender: () ->
      ovivo.desktop.resources.groups.def.done _.bind @_renderGroup, @

      @timeGroups = @$('.time-groups')

      @model.timeGroups.each (timeGroup) => @addTimeGroup timeGroup

      @model.timeGroups.on 'add', @addTimeGroup, @

      @renderDef.resolve()

    addTimeGroup: (timeGroup) -> 
      @timeGroups.append timeGroup.view.el

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true