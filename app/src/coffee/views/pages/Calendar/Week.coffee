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

    events:
      'scroll': 'processScroll'

    processScroll: () ->
      if @_scrollDataFlag is false then @_offsetHeight = @el.offsetHeight

      if @currentModel isnt null then @currentModel.view.processScroll @el.scrollTop, @_offsetHeight

      true

    _getKey: (year, number) -> "#{year}-#{number}"

    _getObj: (year, number) ->
      year: year
      number: number

    _postNavigate: () ->
      @processScroll()

    prev: () -> 
      @current.moveToDayOfWeek(4, -1)

      @navigate @current.getFullYear(), @current.getWeek()

      @_postNavigate()

    next: () ->
      @current.moveToDayOfWeek(4, 1)

      @navigate @current.getFullYear(), @current.getWeek()

      @_postNavigate()

    today: () ->
      _now = Date.today()
      _now.setWeek _now.getWeek()
      _now.moveToDayOfWeek(4)

      @current = _now

      @navigate _now.getFullYear(), _now.getWeek()

      @_postNavigate()

    _isToday: (year, number) ->
      _now = Date.today()
      _now.setWeek _now.getWeek()
      _now.moveToDayOfWeek(4)

      (_now.getFullYear() is year) and (_now.getWeek() is number)

    processCollectorShow: (collector) ->
      @values.week.html collector.number()
      @values.month.html ovivo.config.MONTHS[collector.month()].slice 0, 3
      @values.year.html collector.year()

      _.each collector.days, (obj, i) =>
        @dates[i].innerHTML = "#{obj.date}"

    processCollectorHide: (month) ->

    processWindowResize: () ->
      @_scrollDataFlag = false

    initialize: () ->
      @current = _now = new Date.today()

      @_scrollDataFlag = false

      $(window).on 'resize', @processWindowResize, @
      
      _now.setWeek _now.getWeek()
      _now.moveToDayOfWeek(4)

      @_initialize()

      @title = $('.page.page-calendar header span.title.week-title')
      @dates = $('.page.page-calendar header .weekdays-row span.date')
      @collectorsList = @$ '.weeks-list'

      @values =
        week: $('.page.page-calendar header .week-banner .week-value')
        month: $('.page.page-calendar header .week-banner .month-value')
        year: $('.page.page-calendar header .week-banner .year-value')

      @todayButton = $('.page.page-calendar header .week-today')

      @navigate _now.getFullYear(), _now.getWeek()

      true