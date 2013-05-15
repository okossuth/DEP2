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
      'periods'
    ]

    changePD: () ->
      @set 'resource_needs', []

    toJSON: () ->
      _json = Backbone.Model.prototype.toJSON.call @

      delete _json.periods

      _json

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

    addPeriod: (id) ->
      _obj = _.extend {}, @periods()

      _obj[id] = true

      @set 'periods', _obj

    removePeriod: (id) -> 
      _obj = _.extend {}, @periods()

      delete _obj[id]

      @set 'periods', _obj

    changePrimaryDepartment: (model) ->
      _periods = @periods()

      if typeof _periods is 'object'
        _.each _.keys(_periods), (id) ->
          ovivo.desktop.resources.periods.get(id).removeTemplate model.id

    initialize: (attrs, options) ->
      @View = View

      @on 'change:primary_department', @changePD, @
      @on 'change:resource_needs', @resourceNeedsChange, @

      @on 'change:primary_department', @changePrimaryDepartment, @

      @proxyCall 'initialize', arguments

      true