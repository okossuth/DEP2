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

    today: () ->
      @subViews[@mode].today()

    createNew: () ->
      ovivo.desktop.popups.createNewPopup.show()

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      true

    processViewSwitcherValue: (value) ->
      @showSubView value

    processEventsFilterSwitcherValue: (value) ->
      (_body = $('body')).removeClass 'highlight-events open open-responses closed'

      if value?
        _body.addClass "highlight-events #{value}"

        @_popupOverlay.show()

      else
        @_popupOverlay.hide()

      true

    processSubViewChange: (name) ->
      @mode = name

      @viewSwitcher.setValue name

      true

    clickOverlay: () ->
      @eventsFilterSwitcher.setValue null

    initialize: () ->
      @SubViews = [MonthView, WeekView]
      @defaultSubView = 'week'

      @_popupOverlay = $('.popup-overlay')
      @_popupOverlay.on 'click', _.bind @clickOverlay, @

      @on 'subViewChange', @processSubViewChange, @

      @viewSwitcher = new Switcher @$('.switcher-view'), ['week', 'month']
      @viewSwitcher.on 'value', @processViewSwitcherValue, @

      @eventsFilterSwitcher = new Switcher @$('.switcher-events-filter'), ['open', 'open-responses', 'closed'],
        nullable: true

      @eventsFilterSwitcher.on 'value', @processEventsFilterSwitcherValue, @

      @proxyCall 'initialize', arguments

      true