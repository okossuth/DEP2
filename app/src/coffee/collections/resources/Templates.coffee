define [
  'models/resources/Template',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    localStorageOnly: true

    url: "#{ovivo.config.API_URL_PREFIX}resource-needs/templates/"

    initialize: () ->
      @initResource()

      true