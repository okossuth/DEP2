define [
  '_common/ToolsBase',

  'ovivo'
], (ToolsBase) ->
  Backbone.View.extend
    el: '.side-bar'

    TOP_MENU_LINE_HEIGHT: 71

    events:
      'click .menu-item': 'processItemClick'
      'click .logo.title': 'showNotifications'
      'click .menu-toggle': 'toggleMenu'

    updateNotifications: (model, collection, options) ->
      _unread = ovivo.desktop.resources.notifications.unreadLength()

      @$('.notifications-indicator-container').fadeOut(300).promise().then () =>
        if _unread isnt 0
          @$('.notifications-indicator').html _unread
          @$('.notifications-indicator-container').fadeIn(300)

      true

    menuItemRegExp: /^menu-item-(.*)$/

    _collapseMenuClear: () ->
      @toggler.removeClass 'expanded'
      @$el.removeClass 'expanded'

    _collapseMenu: () ->
      @menuToggled = false

      if ovivo.config.TRANSITION_END?
        @_collapseAction = ToolsBase.onceEventBind @$el, ovivo.config.TRANSITION_END, _.bind @_collapseMenuClear, @

      else
        @_collapseMenuClear()

      @$el.height @TOP_MENU_LINE_HEIGHT

    _expandMenu: () ->
      @menuToggled = true

      if @_collapseAction? then @_collapseAction.cancel()

      @$el.height @menu.offsetHeight

      @toggler.addClass 'expanded'
      @$el.addClass 'expanded'

    toggleMenu: () ->
      @menuToggled = not @menuToggled

      if @menuToggled is true
        @_expandMenu()

      else
        @_collapseMenu()

      true

    showNotifications: (e) ->
      ovivo.desktop.pages.notifications.view.showEl()

    _processItem: (item) ->
      if @prev?
        @prev.removeClass 'selected'

      else
        @$('.selected').removeClass 'selected'

      item.addClass 'selected'

      @prev = item

    processItemClick: (e) ->
      _item = $(e.target).closest('.menu-item')

      ovivo.desktop.pages[@menuItemRegExp.exec(_item[0].id)[1]].show()

      @_processItem _item

      true

    setPage: (name) ->
      _item = @$('#menu-item-' + name)

      @_processItem _item

    renderUser: () ->
      @$('.user-name-value').html "#{ovivo.desktop.resources.user.first_name()} #{ovivo.desktop.resources.user.last_name()}"

      @_checkMenu()

    _checkMenu: () ->
      if @menu.offsetHeight > @TOP_MENU_LINE_HEIGHT
        @$el.addClass 'expandable'

      else if @$el.hasClass 'expandable'
        @$el.removeClass 'expandable'

        @_collapseMenu()

      true

    initialize: () ->
      @menuToggled = false

      @menu = @$('ul.menu')[0]
      @toggler = @$('.menu-toggle')

      ToolsBase.bounceRepeater(50, 5, _.bind @_checkMenu, @)()

      $(window).on 'resize', _.bind @_checkMenu, @

      ovivo.desktop.resources.notifications.on 'reset', @updateNotifications, @
      ovivo.desktop.resources.notifications.on 'add', @updateNotifications, @

      ovivo.desktop.resources.user.def.done _.bind @renderUser, @

      true