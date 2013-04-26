define [
  'models/MonthDay',

  'ovivo'
], (Model) ->
  Backbone.Collection.extend
    model: Model

    initElements: (elements, days) -> _.each _.zip(elements, days), ([element, day]) => @add day, { el: element }; @

    processEventAdd: (event) ->
      @get(event.getKey())?.addEvent event

    initialize: (models, options) ->
      _.extend @, options

      ovivo.desktop.resources.events.on 'add', @processEventAdd, @

      true