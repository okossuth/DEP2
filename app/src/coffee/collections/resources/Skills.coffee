define [
  'models/resources/Skill',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    url: "#{ovivo.config.API_URL_PREFIX}skills/"

    initialize: () ->
      @initResource()

      true