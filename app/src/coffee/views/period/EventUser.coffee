define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'employee'

    template: Handlebars.templates['eventUser']
    groupTemplate: Handlebars.templates['eventUser_group']

    events: {}

    postRender: () -> @$el.addClass @type()

    initialize: () ->
      @proxyCall 'initialize', arguments

      true