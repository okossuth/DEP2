define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'activity'

    template: Handlebars.templates['employeeActivity']
    groupTemplate: Handlebars.templates['employeeActivity_group']

    events: {}

    postRender: () -> @$el.addClass @type

    initialize: (attrs, options) ->
      @type = options.type

      @proxyCall 'initialize', arguments

      true