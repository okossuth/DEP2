define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'time-group'

    template: Handlebars.templates['resourceNeedTimeGroup']
    groupTemplate: Handlebars.templates['resourceNeedTimeGroup_group']

    preventChangeRender: true

    events:
      'click': 'processClick'

    processClick: () ->

    clearScroll: () ->
      
    processScroll: (obj, val) ->

    addBlock: (block) ->

    postRender: () ->
      @resourceNeedWeeks = @$('.resource-needs-rows')

      @addResourcNeedWeeks @model.resourceNeedWeeks.map (rnw) => rnw

      @model.resourceNeedWeeks.on 'add', @addResourcNeedWeeks, @

      @renderDef.resolve()

    addResourcNeedWeeks: (rnws) ->
      @_addViewSorted @resourceNeedWeeks, @model.resourceNeedWeeks, rnws

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true