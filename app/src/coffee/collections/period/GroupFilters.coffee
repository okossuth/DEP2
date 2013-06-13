define [
  'models/period/GroupFilter',

  'ovivo'
], (Model) ->
  Backbone.Collection.extend
    model: Model

    comparator: (model) -> model.name()

    addGroup: (model) ->
      console.log model

      _root = ovivo.desktop.resources.groups.get model.root()

      _model = @get _root.pk()

      if _model? 
        _model.count += 1

      else
        _model = new Model
          root: _root

        @add _model

      if @activeGroup is null
        @activeGroup = _model

        _model.view.apply()

      model.set 'visible', (if @activeGroup.pk() is model.root() then true else false)

    removeGroup: (model) ->
      _root = ovivo.desktop.resources.groups.get model.root()

      _model = @get _root.pk()

      if _model? and (_model.count -= 1) is 0 then @remove _model

      true

    _cancelFilter: (model) -> 
      _.each @periodGroups.getBy('root', model.pk()), (model) -> model.set 'visible', false

      @periodGroups._clearPrev()

    _applyFilter: (model) -> _.each @periodGroups.getBy('root', model.pk()), (model) -> model.set 'visible', true

    handleApply: (model) ->
      if @activeGroup? 
        @_cancelFilter @activeGroup

        @activeGroup.view.cancel()

      model.view.apply()

      @_applyFilter @activeGroup = model

    processRemove: (model) ->
      if model is @activeGroup
        if @length > 0
          @handleApply @activeGroup = @at(0)

        else
          @activeGroup = null

      true

    initialize: (models, options) ->
      @activeGroup = null

      @on 'apply', @handleApply, @
      @on 'remove', @processRemove, @

      @periodGroups = options.periodGroups

      @periodGroups.on 'add', @addGroup, @
      @periodGroups.on 'remove', @removeGroup, @

      true