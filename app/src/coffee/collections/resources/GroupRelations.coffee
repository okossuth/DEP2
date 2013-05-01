define [
  'models/resources/GroupRelation',

  '_common/ResourceManagerBase',

  'ovivo-ella'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    url: () -> "#{ovivo.config.API_URL_PREFIX}users/#{ovivo.config.USER_ID}/groups/"

    postProcess: () ->
      _allowed = @pluck 'pk'

      _.each ovivo.mobile.resources.groups.each (group) ->
        _value = if (_allowed.indexOf(group.id) is -1) then false else true

        group.set 'allowed', _value

    initialize: (models, options) ->
      _.extend @, options

      @initResource()

      $.when(@def, ovivo.mobile.resources.groups.def).then _.bind @postProcess, @

      true
