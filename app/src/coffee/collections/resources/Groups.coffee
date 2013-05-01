define [
  'models/resources/Group',

  '_common/ResourceManagerBase',

  'ovivo-ella'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    url: "#{ovivo.config.API_URL_PREFIX}groups/"

    postProcess: () -> 
      @each (group) => 
        if (_parent = group.parent())? then @get(_parent).get('children').push group
        group.setChainName()
    
    initialize: () ->
      @initResource()

      @def.then _.bind @postProcess, @

      true
