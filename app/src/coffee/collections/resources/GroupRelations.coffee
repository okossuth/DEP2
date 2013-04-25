define [
  'models/resources/GroupRelation',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    url: () -> "#{ovivo.config.API_URL_PREFIX}users/#{ovivo.config.USER_ID}/groups/"

    postProcess: do () ->
      _processGroup = (allowed, parent, group) ->
        if (_.indexOf(allowed, group.id) isnt -1)
          _groupResource = @get(group.id)
          _groupResource.set 'parent', parent
          _groupResource.set 'primary_department', group.primary_department()

          if (parent isnt null) then @get(parent).get('children').push _groupResource

          parent = group.id

        _.each group.children(), (pk) => _processGroup.call @, allowed, parent, ovivo.desktop.resources.groups.get pk

        true

      () ->
        _allowed = @pluck 'pk'

        _.each ovivo.desktop.resources.groups.filter((group) -> group.parent() is null), (group) => _processGroup.call @, _allowed, null, group


    initialize: (models, options) ->
      _.extend @, options

      @initResource()

      $.when(@def, ovivo.desktop.resources.groups).then _.bind @postProcess, @

      true
