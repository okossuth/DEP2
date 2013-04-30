define [
  'views/pages/PageBase',

  'views/pages/Calendar/Month',
  'views/pages/Calendar/Week',

  '_features/Switcher',

  'ovivo'
], (PageBase, MonthView, WeekView, Switcher) ->
  PageBase.extend
    el: '.page.page-calendar'

    events: () -> _.extend {}, PageBase.prototype.events,
      'click .navigate-left': 'prev'
      'click .navigate-right': 'next'
      'click .today': 'today'

    prev: () -> @subViews[@mode].prev()
    next: () -> @subViews[@mode].next()

    today: () ->
      @subViews[@mode].today()

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      true

    processViewSwitcherValue: (value) ->
      @showSubView value

    processSubViewChange: (name) ->
      @mode = name

      @viewSwitcher.setValue name

      true

    initialize: () ->
      @SubViews = [MonthView, WeekView]
      @defaultSubView = 'week'

      @on 'subViewChange', @processSubViewChange, @

      @viewSwitcher = new Switcher @$('.switcher-view'), ['month', 'week']
      @viewSwitcher.on 'value', @processViewSwitcherValue, @

      @proxyCall 'initialize', arguments

      true