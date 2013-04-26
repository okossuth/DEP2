define [
  'models/Month',

  'collections/MonthDays',

  'ovivo'
], (Model, MonthDays) ->
  Backbone.Collection.extend
    model: Model

    comparator: (month) -> month.firstDate()

    addMonth: (obj) ->
      _month = new Model obj, 
        collection: @

      @add _month

      _month

    show: (month) ->
      if @prevMonth?
        @prevMonth.hide()

        @trigger 'hide', @prevMonth

      month.show()
      
      @trigger 'show', month

      @prevMonth = month

    prev: () ->
      _first = @first()

      _prev = new Date _first.year(), _first.month() - 1, 1

      @add
        month: _prev.getMonth()
        year: _prev.getFullYear()

    next: () ->
      _last = @last()

      _next = new Date _last.year(), _last.month() + 1, 1

      @add
        month: _next.getMonth()
        year: _next.getFullYear()

    initialize: (models, options) ->
      ovivo.desktop.monthDays = @monthDays = new MonthDays()

      _.extend @, options

      true