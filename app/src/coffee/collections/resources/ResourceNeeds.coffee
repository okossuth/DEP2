define [
  'models/resources/ResourceNeed',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    url: "#{ovivo.config.API_URL_PREFIX}resource-needs/"

    comparator: (workingHour) -> Date.parse(workingHour.start_date()).valueOf()

    processRange: (start, end) -> @reduce ((arr, workingHour) -> arr.concat workingHour.processRange start, end), []
    
    initialize: () ->
      @initResource()

      true