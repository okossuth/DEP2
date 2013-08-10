define [
  'models/resources/Group',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    url: "#{ovivo.config.API_URL_PREFIX}groups/"

    postProcess: () -> 
      @each (group) => 
        if (_parent = group.parent())? then @get(_parent).get('children').push group
        group.setChainName()

    _ignoreChange: ['chainName', 'children', 'allowed']
    
    initialize: () ->
      @initResource()

      @def.then _.bind @postProcess, @

      true
