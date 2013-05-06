define [
  'ovivo'
], () ->
  _gettersNames: [
    'date'
    'disabled'
    'month'
    'week_number'
    'year'
    'dateObj'
  ]

  addResourceNeed: (model) ->
    _view = model.getView()

    @view.addResourceNeed _view, model

    _.each _.reduce(_.intersection(model._groups, _.keys(@groupCache)), ((memo, group) => memo.concat @groupCache[group]), []), (av) => _view.addAvailability av

  removeResourceNeed: (model) -> @view.removeResourceNeed model

  addAvailability: (model) ->
    if not (_arr = @groupCache[model.group()])? then _arr = @groupCache[model.group()] = []

    _arr.push model

    _.each @resourceNeeds, (view) => view.addAvailability model, @groupCache

  checkToday: () ->
    if @collection.todayFound isnt true
      _now = Date.today()

      if (_now - @dateObj()) is 0
        @view.setToday()

        @collection.todayFound = true

  highlight: (model) -> @view.highlight model
  removeHighlight: (model) -> @view.removeHighlight model

  initialize: (attrs, options) ->
    @proxyCall 'initialize', arguments

    @set 'pk', "#{@year()}-#{@month()}-#{@date()}#{if @disabled() is true then '-disabled' else ''}"
    @set 'dateObj', new Date @year(), @month(), @date()

    @view = new @View
      model: @
      el: options.el

    @checkToday()

    @groupCache = {}

    true