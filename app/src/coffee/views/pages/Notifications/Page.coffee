define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-notifications'

    events: () -> _.extend {}, PageBase.prototype.events,
      'click div.done-button': 'list'
      'click .load-more-button': 'loadMoreClick'

    list: () ->
      ovivo.desktop.resources.notifications.readAll()

      @hideEl()

    loadMoreClick: () -> ovivo.desktop.resources.notifications.loadMore()

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      true

    appendItem: (item) -> @$('.notifications-list').append item
    prependItem: (item) -> @$('.notifications-list').prepend item
    insertBefore: (model, nextModel) -> nextModel.view.$el.before model.view.$el

    checkLast: () -> if ovivo.desktop.resources.notifications.isLast() is true then @$('.load-more-button').hide() else @$('.load-more-button').show()

    resetHandler: () ->
      ovivo.desktop.resources.notifications.each (model) => @appendItem model.view.el

      @checkLast()

      true

    addHandler: (model, collection, options) ->
      _i = collection.indexOf model

      _j = _i + 1

      while (next = collection.at(_j))? and (next.inserted isnt true)
        _j += 1

      if next?
        @insertBefore model, next

      else 
        @appendItem model.view.el

      @checkLast()

      model.inserted = true

      true

    changeHandler: () ->

      true

    initialize: () ->
      @proxyCall 'initialize', arguments

      ovivo.desktop.resources.notifications.on 'reset', @resetHandler, @
      ovivo.desktop.resources.notifications.on 'add', @addHandler, @
      ovivo.desktop.resources.notifications.on 'change', @changeHandler, @

      true