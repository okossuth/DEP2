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
      'click .button-resources': 'navigateResources'
      'click .add-groups': 'addGroupsClick'

    addGroupsClick: () ->
      if ovivo.config.TRANSFORM is false
        @$('.add-groups').toggleClass 'swap-icons'

      else
        @$('.add-groups').toggleClass 'rotate'

      @$('.groups-popup').toggle 300

    navigateResources: () ->
      ovivo.desktop.pages.resources.show()

    prev: () -> @subViews[@mode].prev()
    next: () -> @subViews[@mode].next()

    processScroll: (e) ->
      if @subViews[@mode].processScroll then @subViews[@mode].processScroll()

      true

    _postNavigate: () ->
      if @subViews[@mode]._postNavigate then @subViews[@mode]._postNavigate()

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

      @_postNavigate()

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

      @weekViewSwitcher = new Switcher @$('.week-view-switcher'), ['employees', 'periods']
      @weekViewSwitcher.setValue 'employees'

      @$('.scroller').on 'scroll', _.bind @processScroll, @

      @proxyCall 'initialize', arguments

      true