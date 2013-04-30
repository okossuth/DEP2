define [
  'ovivo'
], () ->
  Backbone.View.extend
    events:
      'click .close': 'close'

    close: () -> @hide()

    show: () ->
      @$el.show()

      $('.popup-overlay').show()

    hide: () ->
      @$el.hide()

      $('.popup-overlay').hide()

    _initialize: () ->
      true
