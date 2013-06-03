define [
  'views/resources/ResourceBase',

  '_common/ToolsBase',

  'ovivo'
], (ResourceBase, ToolsBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'resource-need-row'

    template: Handlebars.templates['resourceNeedWeek']
    groupTemplate: Handlebars.templates['resourceNeedWeek_group']

    events: {}

    initialize: () ->
      @proxyCall 'initialize', arguments

      true