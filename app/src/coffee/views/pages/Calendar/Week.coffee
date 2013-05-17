define [
  'views/pages/Calendar/DaysCollectorPage',
  'views/pages/PageBase',

  'collections/calendar/Weeks',

  'ovivo'
], (DaysCollectorPage, PageBase, Weeks) ->
  PageBase.extend _.extend {}, DaysCollectorPage,
    el: '.page.page-calendar .week-view'

    name: 'week'

    Collectors: Weeks

    events: {}

    _getKey: (year, number) -> "#{year}-#{number}"

    _getObj: (year, number) ->
      year: year
      number: number

    prev: () -> 
      @current.moveToDayOfWeek(4, -1)

      @navigate @current.getFullYear(), @current.getWeek()

    next: () ->
      @current.moveToDayOfWeek(4, 1)

      @navigate @current.getFullYear(), @current.getWeek()

    today: () ->
      _now = Date.today()
      _now.setWeek _now.getWeek()
      _now.moveToDayOfWeek(4)

      @navigate _now.getFullYear(), _now.getWeek()

    _isToday: (year, number) ->
      _now = Date.today()
      _now.setWeek _now.getWeek()
      _now.moveToDayOfWeek(4)

      (_now.getFullYear() is year) and (_now.getWeek() is number)

    processCollectorShow: (collector) ->
      @title.html gettext('Week') + ' ' + collector.number() + '. ' + ovivo.config.MONTHS[collector.month()] + ' ' + collector.year()

    processCollectorHide: (month) ->

    initialize: () ->
      @current = _now = new Date.today()
      
      _now.setWeek _now.getWeek()
      _now.moveToDayOfWeek(4)

      @_initialize()

      @title = $('.page.page-calendar header span.title.week-title')
      @collectorsList = @$ '.weeks-list'

      @todayButton = $('.page.page-calendar header .week-today')

      @navigate _now.getFullYear(), _now.getWeek()

      true