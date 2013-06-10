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

    postRender: () ->
      @renderDef.resolve()

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true