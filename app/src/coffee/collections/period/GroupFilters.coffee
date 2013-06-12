define [
  'models/period/GroupFilter',

  'ovivo'
], (Model) ->
  Backbone.Collection.extend
    model: Model

    addGroup: (model) ->
      console.log 'Group was added', ovivo.desktop.resources.groups.def.state()

    removeGroup: (model) ->
      console.log 'Group was removed'

    initialize: (models, options) ->
      @periodGroups = options.periodGroups

      @periodGroups.on 'add', @addGroup, @
      @periodGroups.on 'remove', @removeGroup, @

      true