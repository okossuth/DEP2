define [
  'models/resources/Comment',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    url: () -> "#{ovivo.config.API_URL_PREFIX}events/#{@event.id}/comments/"
    
    initialize: (models, options) ->
      _.extend @, options

      @initResource()

      true
