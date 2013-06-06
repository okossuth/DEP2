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
      'click .button-create-new': 'createNew'

    prev: () -> @subViews[@mode].prev()
    next: () -> @subViews[@mode].next()

    processScroll: (e) ->
      if @subViews[@mode].processScroll then @subViews[@mode].processScroll()

      true

    today: () ->
      @subViews[@mode].today()

    createNew: () ->
      ovivo.desktop.popups.createNewPopup.show()

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      @processScroll()

      true

    processViewSwitcherValue: (value) ->
      @showSubView value

    processSubViewChange: (name) ->
      @mode = name

      @viewSwitcher.setValue name

      true

    initialize: () ->
      @SubViews = [WeekView]
      @defaultSubView = 'week'

      @on 'subViewChange', @processSubViewChange, @

      @viewSwitcher = new Switcher @$('.switcher-view'), ['week', 'month']
      @viewSwitcher.on 'value', @processViewSwitcherValue, @

      @$('.scroller').on 'scroll', _.bind @processScroll, @

      @proxyCall 'initialize', arguments

      true