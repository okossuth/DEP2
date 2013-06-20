define [
  '_features/dateFormatter',

  'views/resources/ResourceBase',

  'ovivo'
], (dateFormatter, ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'notification'

    template: Handlebars.templates['notification']
    groupTemplate: Handlebars.templates['notification_group']

    name: () -> @model.summary().split(' ').slice(0, 2).join(' ')
    summary: () -> @model.summary().split(' ').slice(2).join(' ')
    timestamp: () -> dateFormatter @model.timestamp()

    postRender: () ->
      if @read() is true then @$el.addClass('visited') else @$el.removeClass('visited')

      true

    initialize: () ->
      @proxyCall 'initialize', arguments

      true