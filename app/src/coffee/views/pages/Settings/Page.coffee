define [
  'views/pages/PageBase',

  'views/pages/Settings/General',
  'views/pages/Settings/ResourceNeed',

  'ovivo'
], (PageBase, GeneralView, ResourceNeedView) ->
  PageBase.extend
    el: '.page.page-settings'

    events: () -> _.extend {}, PageBase.prototype.events,
      'click .sections-menu-item': 'menuClick'

    menuRegExp: /\bsections-menu-item-(.+)\b/

    menuClick: (e) ->
      _item = $(e.target).closest('.sections-menu-item')

      @showSubView @menuRegExp.exec(_item[0].className)[1]

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      true

    changeName: () ->
      @$('header span.title').html ovivo.desktop.resources.user.first_name() + ' ' + ovivo.desktop.resources.user.last_name()

    initialize: () ->
      @SubViews = [GeneralView, ResourceNeedView]
      @defaultSubView = 'general'

      @proxyCall 'initialize', arguments

      ovivo.desktop.resources.user.on 'change:first_name', @changeName, @
      ovivo.desktop.resources.user.on 'change:last_name', @changeName, @

      true