define [
  'views/resources/ResourceBase',

  '_common/ToolsBase',

  'ovivo'
], (ResourceBase, ToolsBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'table'

    template: Handlebars.templates['periodBlockWeek']
    groupTemplate: Handlebars.templates['periodBlockWeek_group']

    events: {}

    initialize: () ->
      @proxyCall 'initialize', arguments

      true