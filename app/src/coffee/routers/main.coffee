define [
  'models/resources/Event',

  'ovivo'
], (Event) ->
  _Router = Backbone.Router.extend
    routes: {}
    
    initialize: () ->
      true

  new _Router()