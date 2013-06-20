define [
  'views/resources/ResourceBase',

  '_features/trailZero',

  'ovivo'
], (ResourceBase, trailZero) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'availability'

    template: Handlebars.templates['availability']
    groupTemplate: Handlebars.templates['availability_group']

    start: () ->
      _date = new Date Date.parse @model.start()

      "#{trailZero(_date.getHours())}:#{trailZero(_date.getMinutes())}"

    end: () ->
      _date = new Date Date.parse @model.end()

      "#{trailZero(_date.getHours())}:#{trailZero(_date.getMinutes())}"

    events: {}

    renderUser: () ->
      @$('span.user').html ovivo.desktop.resources.users.get(@model.user()).name()

    postRender: () ->
      ovivo.desktop.resources.users.def.then _.bind @renderUser, @

    initialize: () ->
      @proxyCall 'initialize', arguments

      true