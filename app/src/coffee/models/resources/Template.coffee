define [
  'models/resources/ResourceBase',

  'views/resources/Template'

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    typeName: 'template'

    localStorageOnly: true

    _gettersNames: [
      'pk'
      'name'
      'repeat'
      'resource_needs'
      'primary_department'
    ]

    changePD: () ->
      @set 'resource_needs', []

    resourceNeedsChange: () ->
      if not @id? then return true

      _cur = @resource_needs()
      _prev = @previous 'resource_needs'

      _removed = _.without.apply _, [_prev].concat _cur
      _new = _.without.apply _, [_cur].concat _prev

      _.each _removed, (id) =>
        ovivo.desktop.resources.resourceNeeds.get(id).removeTemplate @id

      _.each _new, (id) =>
        ovivo.desktop.resources.resourceNeeds.get(id).addTemplate @id

    removeResourceNeed: (id)->
      _val = []
      _arr = @resource_needs()

      _.each _arr, (el) -> _val.push el

      _i = _val.indexOf id

      if _i isnt -1
        _val.splice _i, 1

      @set 'resource_needs', _val

    initialize: (attrs, options) ->
      @View = View

      @on 'change:primary_department', @changePD, @
      @on 'change:resource_needs', @resourceNeedsChange, @

      @proxyCall 'initialize', arguments

      true