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

    pk: () -> @group()

    events:
      'click': 'processClick'

    processClick: () ->

    clearScroll: () ->
      
    processScroll: (obj, val) ->

    addBlock: (block) ->

    _renderGroup: () ->
      @$('.group-name').html ovivo.desktop.resources.groups.get(@group()).name()

    postRender: () ->
      ovivo.desktop.resources.groups.def.done _.bind @_renderGroup, @

      @renderDef.resolve()

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true