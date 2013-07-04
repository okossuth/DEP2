define [
  'ovivo'
], () ->
  Backbone.View.extend
    el: '#voice-recognition'

    processKey: (e) ->
      if not ((e.ctrlKey is true) and (e.shiftKey is true) and (e.keyCode is 19)) then return
      
      @model.set 'show', true
      @model.set 'processing', true

    changeShow: () ->
      if @model.show() is true
        @$el.addClass 'show'

      else
        @$el.removeClass 'show'

      true

    initialize: () ->
      $(window).on 'keypress', _.bind @processKey, @

      @model.on 'change:show', @changeShow, @

      true