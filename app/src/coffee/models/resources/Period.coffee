define [
  'models/resources/ResourceBase',

  'views/resources/Period',

  '_features/RuleCompiler',

  'ovivo'
], (ResourceBase, View, RuleCompiler) ->
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

    compile: (start, end) ->
      if not start? then start = new Date Date.parse @start_date()
      if not end? then end = new Date Date.parse @end_date()

      _arr = []

      _.each _.map(@templates(), (tId) -> ovivo.desktop.resources.templates.get tId), (t) =>
        _.each _.map(t.resource_needs(), (rnId) -> ovivo.desktop.resources.resourceNeeds.get rnId), (rn) =>
          _arr = _arr.concat RuleCompiler.compile rn, start, end, @start_date(), @end_date(), t.repeat(), rn.weekdaysHash

      _arr

    initialize: (attrs, options) ->
      @View = View
      
      @on 'change:templates', @changeTemplates, @
      @on 'change:primary_department', @changePD, @

      @proxyCall 'initialize', arguments

      true