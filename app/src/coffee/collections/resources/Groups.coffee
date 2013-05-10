define [
  'models/resources/Group',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    fullResponse: true

    url: "#{ovivo.config.API_URL_PREFIX}groups/"

    createTree: do ->
      _processGroup = (group, level) ->
        _arr = []

        group.set 'level', level

        _arr.push
          group: group
          level: level

        _.reduce group.children, ((memo, pk) => memo.concat _processGroup.call @, @get(pk), level + 1), _arr

      _processPD = (pd) ->
          pd: pd
          groups: (_.reduce (@filter (group) -> (group.primary_department() is pd.pk()) and (group.parent() is null)), ((memo, group) => memo.concat _processGroup.call @, group, 0), [])

      () ->
        @tree = ovivo.desktop.resources.primaryDepartments.map ((pd) => _processPD.call @, pd)

        @trigger 'tree-ready', @tree

    setChildren: () ->
      @each (group) => if (_parent = group.parent())? then @get(group.parent()).children.push group

    initialize: () ->
      @tree = []

      @initResource()

      @def.then _.bind @setChildren, @

      $.when(ovivo.desktop.resources.municipalities.def, ovivo.desktop.resources.primaryDepartments.def, @def).then _.bind @createTree, @

      true