define [
  'models/resources/ResourceNeed',

  '_common/ResourceManagerBase',
  '_common/CachableCollection',

  'ovivo'
], (Model, ResourceManagerBase, CachableCollection) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase, CachableCollection.get(['primary_department']),
    model: Model

    fullResponse: true

    localStorageOnly: true

    url: "#{ovivo.config.API_URL_PREFIX}resource-needs/"

    processRange: (start, end) -> @reduce ((arr, workingHour) -> arr.concat workingHour.processRange start, end), []

    _ignoreChange: ['checked', 'deltaHours', 'templates']
    
    initialize: () ->
      @initResource()

      @initCacheProcessors()

      true