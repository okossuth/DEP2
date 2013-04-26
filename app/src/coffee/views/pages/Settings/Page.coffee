define [
  'views/pages/PageBase',

  'views/pages/Settings/General',
  'views/pages/Settings/Notifications',
  'views/pages/Settings/Availability',
  'views/pages/Settings/Connections',

  'ovivo'
], (PageBase, GeneralView, NotificationsView, AvailabilityView, ConnectionsView) ->
  PageBase.extend
    el: '.page.page-settings'

    events: () -> _.extend {}, PageBase.prototype.events, {}

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      true

    initialize: () ->
      @SubViews = [GeneralView, NotificationsView, AvailabilityView, ConnectionsView]
      @defaultSubView = 'general'

      @proxyCall 'initialize', arguments

      true