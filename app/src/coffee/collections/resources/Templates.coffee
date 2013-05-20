define [
  'models/resources/Template',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    # localStorageOnly: true

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

    initialize: () ->
      @initResource()

      @on 'add', @processTemplateAdd, @
      @on 'remove', @processTemplateRemove, @

      true