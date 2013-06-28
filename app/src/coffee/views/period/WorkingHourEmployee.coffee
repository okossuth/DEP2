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

    postRender: () -> 
      @$el.removeClass('available unavailable').addClass if @available() is true then 'available' else 'unavailable'

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      options.block.on 'remove', @_processRemove, @

      true