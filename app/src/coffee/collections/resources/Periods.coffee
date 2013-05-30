define [
  'models/resources/Period',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    # localStorageOnly: true
    initializeEmpty: true

    url: "#{ovivo.config.API_URL_PREFIX}resource-needs/periods/"

    _processPeriodAdd: (model) ->
      _id = model.id

      _.each model.templates(), (id) =>
        ovivo.desktop.resources.templates.get(id).addPeriod _id

    _processPeriodRemove: (model) ->
      _id = model.id

      _.each model.templates(), (id) =>
        ovivo.desktop.resources.templates.get(id).removePeriod _id

    processPeriodAdd: (model) ->
      ovivo.desktop.resources.templates.def.done () => @_processPeriodAdd model

    processPeriodRemove: (model) ->
      ovivo.desktop.resources.templates.def.done () => @_processPeriodRemove model

    initialize: () ->
      @initResource()

      @on 'add', @processPeriodAdd, @
      @on 'remove', @processPeriodRemove, @

      true