define [
  'models/resources/Municipality',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    url: "#{ovivo.config.API_URL_PREFIX}departments/municipalities/"
    
    initialize: () ->
      @initResource()

      true
