define [
  'views/pages/PageBase',

  '_features/PercentageIndicator',

  'collections/PeriodMonths',

  'ovivo'
], (PageBase, PercentageIndicator, PeriodMonths) ->
  PageBase.extend
    el: '.page.page-resources .content-periods'

    name: 'periods'

    events: {}

    createNew: () ->
      ovivo.desktop.popups.editPopupPeriod.show()
      ovivo.desktop.popups.editPopupPeriod.create()

    periodAdd: (model) ->
      @empty.hide()
      
      _date = new Date Date.parse(model.start_date())

      _key = "#{_date.getFullYear()}-#{_date.getMonth()}"

      if not (_period = @periodMonths.get(_key))? then _period = @periodMonths.addMonth
        year: _date.getFullYear()
        month: _date.getMonth()

      _period.addPeriod model

      true

    monthAdd: (model) ->
      _i = @periodMonths.indexOf model

      if _i is (@periodMonths.length - 1)
        @monthsContainer.append model.view.el

      else
        @periodMonths.at(_i + 1).view.$el.before model.view.el

    initialize: () ->
      @on 'action:add', @createNew, @

      @monthsContainer = @$('ul.month-sections')
      @empty = @$('ul.month-sections li.empty')

      @periodMonths = new PeriodMonths()

      @periodMonths.on 'add', @monthAdd, @

      ovivo.desktop.resources.periods.on 'add', @periodAdd, @

      # @$('li.period .percentage').each (i, el) -> 
      #   new PercentageIndicator el, 100, 100, Math.floor(Math.random() * 50 + 50)

      true