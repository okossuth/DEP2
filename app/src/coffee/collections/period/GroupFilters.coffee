define [
  'models/period/GroupFilter',

  'ovivo'
], (Model) ->
  Backbone.Collection.extend
    model: Model

    comparator: (model) -> model.name()

    addGroup: (model) ->
      _root = ovivo.desktop.resources.groups.get ovivo.desktop.resources.groups.get(model.pk()).pkRoot()

      _model = @get _root.pk()

      if _model? then _model.count += 1; return

      @add
        root: _root

    removeGroup: (model) ->
      _root = ovivo.desktop.resources.groups.get ovivo.desktop.resources.groups.get(model.pk()).pkRoot()

      _model = @get _root.pk()

      if _model? and (_model.count -= 1) is 0 then @remove _model

      true

    initialize: (models, options) ->
      @periodGroups = options.periodGroups

      @periodGroups.on 'add', @addGroup, @
      @periodGroups.on 'remove', @removeGroup, @

      true