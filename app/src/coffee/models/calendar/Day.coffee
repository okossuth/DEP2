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

  removeResourceNeed: (model) -> @view.removeResourceNeed model

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

    true