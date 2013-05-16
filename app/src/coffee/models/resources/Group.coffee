define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    typeName: 'group'

    _gettersNames: [
      'pk'
      'name'
      'primary_department'
      'parent'
      'level'
      'treeName'
      'chainName'
    ]

    levelChange: () ->
      _level = @level()

      @set 'treeName', Array(_level + 1).join('\u2003') + '\u21b3 '  + @name()

    initialize: (attrs, options) ->
      @children = []

      @on 'change:level', @levelChange, @

      @proxyCall 'initialize', arguments

      true