define [
  'ovivo'
], () ->
  Backbone.View.extend
    el: '.side-bar'

    events: 
      'click .menu-item': 'processItemClick'

    menuItemRegExp: /^menu-item-(.*)$/

    processItemClick: (e) ->
      _item = $(e.target).closest('.menu-item')

      ovivo.desktop.pages[@menuItemRegExp.exec(_item[0].id)[1]].show()

      if @prev?
        @prev.removeClass 'selected'

      else
        @$('.selected').removeClass 'selected'

      _item.addClass 'selected'

      @prev = _item

      true

    initialize: () ->

      true
