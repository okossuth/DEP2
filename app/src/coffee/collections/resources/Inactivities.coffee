define [
  'models/resources/Inactivity',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    url: "#{ovivo.config.API_URL_PREFIX}users/#{ovivo.config.USER_ID}/inactivity/"

    comparator: (inactivity) -> Date.parse(inactivity.start()).valueOf()

    processRange: (start, end) -> @reduce ((arr, inactivity) -> arr.concat inactivity.processRange start, end), []
    
    initialize: () ->
      @initResource()

      true