define [
  'models/resources/Notification',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    url: "#{ovivo.config.API_URL_PREFIX}notifications/"

    comparator: (notification) -> -Date.parse(notification.timestamp()).valueOf()

    unreadLength: () -> @filter((model) -> model.read() is false).length

    isLast: () -> if (@length is 0) or (@find (notification) -> notification.last() is true)? then true else false

    loadMore: () ->
      _lastId = @last().id

      @_fetch
        'start_pk': _lastId

    readAll: () ->
      _unread = @filter (notification) -> notification.read() is false
      _jsonArr = []

      _.each _unread, (notification) -> 
        notification.set 'read', true

        _jsonArr.push notification.toJSON()

        true

      ovivo.desktop.pages.list.view.updateNotifications()
      
      if _jsonArr.length > 0
        $.ajax
          url: @url
          type: 'PUT'
          data: JSON.stringify(_jsonArr)
          contentType: 'application/json'
          
      else true

    initialize: () ->
      @initResource()

      true
