define [
  'models/ApiError',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    localStorageOnly: true

    url: "/API-errors/"

    addError: (url, model, resp, method, options) ->
      if (method is 'update') or (method is 'create')
        @add
          obj: model.toJSON()
          method: method
          resp: resp
          url: url

    initialize: () ->
      @initResource()

      true