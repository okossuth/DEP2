define [
  'ovivo'
], () ->
  Backbone.View.extend
    el: '.side-bar'

    events: 
      'click .menu-item': 'processItemClick'
      'click .logo.title': 'showNotifications'

    updateNotifications: (model, collection, options) ->
      _unread = ovivo.desktop.resources.notifications.unreadLength()
      
      @$('.notifications-indicator-container').fadeOut(300).promise().then () =>
        if _unread isnt 0
          @$('.notifications-indicator').html _unread
          @$('.notifications-indicator-container').fadeIn(300)

      true

    menuItemRegExp: /^menu-item-(.*)$/

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

    initialize: () ->
      ovivo.desktop.resources.notifications.on 'reset', @updateNotifications, @
      ovivo.desktop.resources.notifications.on 'add', @updateNotifications, @

      ovivo.desktop.resources.user.def.done _.bind @renderUser, @

      true
