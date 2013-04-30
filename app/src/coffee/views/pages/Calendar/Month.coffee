define [
  'views/pages/Calendar/DaysCollectorPage',
  'views/pages/PageBase',

  'collections/calendar/Months',

  'ovivo'
], (DaysCollectorPage, PageBase, Months) ->
  PageBase.extend _.extend {}, DaysCollectorPage,
    el: '.page.page-calendar .month-view'

    name: 'month'

    Collectors: Months

    events: {}

    _getKey: (year, month) -> "#{year}-#{month}"

    _getObj: (year, month) ->
      year: year
      month: month

    prev: () -> 
      @current.setMonth @current.getMonth() - 1

      @navigate @current.getFullYear(), @current.getMonth()

    next: () ->
      @current.setMonth @current.getMonth() + 1

      @navigate @current.getFullYear(), @current.getMonth() 

    today: () ->
      _today = Date.today()

      @current.setMonth _today.getMonth()

      @navigate @current.getFullYear(), @current.getMonth()

    _isToday: (year, month) ->
      _today = Date.today()

      (_today.getFullYear() is year) and (_today.getMonth() is month)

    processCollectorShow: (collector) ->
      @title.html ovivo.config.MONTHS[collector.month()] + ' ' + collector.year()

    processCollectorHide: (collector) ->

    initialize: () ->
      @current = _now = new Date()

      @_initialize()

      @title = $('.page.page-calendar header span.title.month-title')
      @collectorsList = @$ '.months-list'

      @todayButton = $('.page.page-calendar header .month-today')

      @navigate _now.getFullYear(), _now.getMonth()

      true