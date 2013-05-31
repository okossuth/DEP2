define [
  'views/pages/PageBase',

  'views/pages/Settings/General',
  'views/pages/Settings/Notifications',
  'views/pages/Settings/Availability',
  'views/pages/Settings/Timeoff',
  'views/pages/Settings/Connections',

  'ovivo'
], (PageBase, GeneralView, NotificationsView, AvailabilityView, TimeoffView, ConnectionsView) ->
  PageBase.extend
    el: '.page.page-settings'

    events: () -> _.extend {}, PageBase.prototype.events,
      'click .sections-menu-item': 'menuClick'
      'click .button-save': 'save'

    menuRegExp: /\bsections-menu-item-(.+)\b/

    menuClick: (e) ->
      _item = $(e.target).closest('.sections-menu-item')

      @showSubView @menuRegExp.exec(_item[0].className)[1]

    save: () ->
      @subViews[@subView()].trigger 'action:save'

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      true

    changeName: () ->
      @$('header span.title').html ovivo.desktop.resources.user.first_name() + ' ' + ovivo.desktop.resources.user.last_name()

    initialize: () ->
      @SubViews = [GeneralView, NotificationsView, AvailabilityView, TimeoffView, ConnectionsView]
      @defaultSubView = 'general'

      @proxyCall 'initialize', arguments

      ovivo.desktop.resources.user.on 'change:first_name', @changeName, @
      ovivo.desktop.resources.user.on 'change:last_name', @changeName, @

      true