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

    events: {}

    postRender: () ->

    initialize: () ->
      @proxyCall 'initialize', arguments

      true