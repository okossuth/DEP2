define [
  'models/resources/ResourceNeed',

  '_common/ResourceManagerBase',
  '_common/CachableCollection',

  'ovivo'
], (Model, ResourceManagerBase, CachableCollection) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase, CachableCollection.get(['primary_department']),
    model: Model

    fullResponse: true

    # localStorageOnly: true
    initializeEmpty: true

    url: "#{ovivo.config.API_URL_PREFIX}resource-needs/"

    processRange: (start, end) -> @reduce ((arr, workingHour) -> arr.concat workingHour.processRange start, end), []

    _ignoreChange: ['checked', 'deltaHours', 'templates']

    processRemove: (model) ->
      if not (_templates = model.templates())? then return

      _.each _.keys(_templates), (id) ->
        _template = ovivo.desktop.resources.templates.get(id)

        if not _template? then return

        _template.removeResourceNeed model.id
    
    initialize: () ->
      @initResource()

      @initCacheProcessors()

      @on 'remove', @processRemove, @

      true