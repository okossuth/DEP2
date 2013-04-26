define [
  'views/pages/PageBase',

  'collections/Months',

  'ovivo'
], (PageBase, Months) ->
  PageBase.extend
    el: '.page.page-calendar .month-view'

    name: 'month'

    events: {}

    prev: () -> 
      @current.setMonth @current.getMonth() - 1

      @navigateMonth @current.getFullYear(), @current.getMonth()

    next: () ->
      @current.setMonth @current.getMonth() + 1

      @navigateMonth @current.getFullYear(), @current.getMonth()

    navigateMonth: (year, month) ->
      if not (_month = @months.get "#{year}-#{month}")?
        _month = @months.addMonth
          month: month
          year: year

      @months.show _month

      true

    processMonthAdd: (month, months) -> @$('.months-list').append month.view.el

    processMonthShow: (month) ->
      @title.html ovivo.config.MONTHS[month.month()] + ' ' + month.year()

      console.log 'Show ' + ovivo.config.MONTHS[month.month()] + ' ' + month.year()

    processMonthHide: (month) ->

    initialize: () ->
      @current = _now = new Date()

      @title = $('.page.page-calendar header span.title')
      
      ovivo.desktop.months = @months = new Months()

      @months.on 'add', @processMonthAdd, @

      @months.on 'show', @processMonthShow, @
      @months.on 'hide', @processMonthHide, @

      @navigateMonth _now.getFullYear(), _now.getMonth()

      true