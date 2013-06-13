define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'group-filter'

    template: Handlebars.templates['groupFilter']
    groupTemplate: Handlebars.templates['groupFilter_group']

    events:
      'click': 'triggerApply'

    triggerApply: () ->
      @model.trigger 'apply', @model

    apply: () ->
      @$el.addClass 'selected'

    cancel: () ->
      @$el.removeClass 'selected'

    postRender: () ->

    initialize: () ->
      @proxyCall 'initialize', arguments

      true