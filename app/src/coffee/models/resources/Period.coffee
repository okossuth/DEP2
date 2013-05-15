define [
  'models/resources/ResourceBase',

  'views/resources/Period',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    typeName: 'period'

    localStorageOnly: true

    _gettersNames: [
      'pk'
      'start_date'
      'end_date'
      'templates'
      'primary_department'
      'groups'
    ]

    changePD: () ->
      @set 'templates', []
      @set 'groups', []

    changeTemplates: () ->
      if not @id? then return true

      _cur = @templates()
      _prev = @previous 'templates'

      _removed = _.without.apply _, [_prev].concat _cur
      _new = _.without.apply _, [_cur].concat _prev

      _.each _removed, (id) =>
        ovivo.desktop.resources.templates.get(id).removePeriod @id

      _.each _new, (id) =>
        ovivo.desktop.resources.templates.get(id).addPeriod @id

    removeTemplate: (id) ->
      _val = []
      _arr = @templates()

      _.each _arr, (el) -> _val.push el

      _i = _val.indexOf id

      if _i isnt -1
        _val.splice _i, 1

      @set 'templates', _val

    initialize: (attrs, options) ->
      @View = View
      
      @on 'change:templates', @changeTemplates, @
      @on 'change:primary_department', @changePD, @

      @proxyCall 'initialize', arguments

      true