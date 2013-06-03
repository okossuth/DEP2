define [
  'collections/period/Frames',

  'models/resources/Period',

  '_common/ResourceManagerBase',

  'ovivo'
], (Frames, Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

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

    processFrameUpdate: do ->
      _monitorChanges = ['templates', 'start_date', 'end_date']

      (period) ->
        _int = _.intersection _.keys(period.changed), _monitorChanges

        if _int.length > 0 then @trigger 'updateFrames', period

        true

    initialize: () ->
      @initResource()

      @on 'add', @processPeriodAdd, @
      @on 'remove', @processPeriodRemove, @

      @on 'change', @processFrameUpdate, @

      true