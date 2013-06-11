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

      @model.resourceNeedWeeks.each (rnw) => @addResourcNeedWeek rnw

      @model.resourceNeedWeeks.on 'add', @addResourcNeedWeek, @

      @renderDef.resolve()

    addResourcNeedWeek: (rnw) ->
      @resourceNeedWeeks.append rnw.view.el

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true