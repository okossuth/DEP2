define [
  'models/resources/Template',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    # localStorageOnly: true
    initializeEmpty: true

    url: "#{ovivo.config.API_URL_PREFIX}resource-needs/templates/"

    _ignoreChange: ['periods']

    _processTemplateAdd: (model) ->
      _id = model.id

      _.each model.resource_needs(), (id) =>
        ovivo.desktop.resources.resourceNeeds.get(id).addTemplate _id

    _processTemplateRemove: (model) ->
      _id = model.id

      _.each model.resource_needs(), (id) =>
        ovivo.desktop.resources.resourceNeeds.get(id).removeTemplate _id

    processTemplateAdd: (model) ->
      ovivo.desktop.resources.resourceNeeds.def.done () => @_processTemplateAdd model

    processTemplateRemove: (model) ->
      ovivo.desktop.resources.resourceNeeds.def.done () => @_processTemplateRemove model

    processRemove: (model) ->
      if not (_periods = model.periods())? then return

      _.each _.keys(_periods), (id) ->
        _period = ovivo.desktop.resources.periods.get(id)

        if not _period? then return

        _period.removeTemplate model.id

    passFrameUpdate: (model) ->
      _.each _.keys(model.periods()), (id) ->
        _period = ovivo.desktop.resources.periods.get(id)

        if not _period? then return

        ovivo.desktop.resources.periods.trigger 'updateFrames', _period

    processFrameUpdate: do ->
      _monitorChanges = ['resource_needs']

      (template) ->
        _int = _.intersection _.keys(template.changed), _monitorChanges

        if _int.length > 0 then @passFrameUpdate template

        true

    initialize: () ->
      @initResource()

      @on 'add', @processTemplateAdd, @
      @on 'remove', @processTemplateRemove, @

      @on 'remove', @processRemove, @

      @on 'change', @processFrameUpdate, @

      true