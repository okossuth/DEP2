define [
  '_common/AnimationControl',

  'ovivo'
], (AnimationControl) ->
  _counter = 0

  _Popup = Backbone.View.extend _.extend {}, AnimationControl,
    events:
      'click .close': 'close'

    close: () -> @hide()

    show: () ->
      @$el.show()

      $('.popup-overlay').show()

    hide: () ->
      @$el.hide()

      $('.popup-overlay').hide()

    _handlerEnterEnd: (handler, $el, e) ->
      $el.removeClass 'enter'

      $el.off ovivo.config.ANIMATION_END, handler

    _handlerExitEnd: (handler, $el, e) ->
      _counter -= 1

      $el.removeClass 'exit'

      $el.hide()

      if _counter is 0
        $('.popup-overlay').hide()
        $('.popup-overlay').removeClass 'exit enter'

      $el.off ovivo.config.ANIMATION_END, handler

    _animationShow: () ->
      _counter += 1

      @$el.show()

      @_attachHandler @_handlerEnterEnd

      @$el.addClass 'enter'

      $('.popup-overlay').show()
      $('.popup-overlay').removeClass('exit').addClass('enter')

    _animationHide: () ->
      @_attachHandler @_handlerExitEnd

      @$el.addClass 'exit'

      if _counter <= 1
        $('.popup-overlay').addClass('exit')

      true

    _initialize: () ->

      true

  if Modernizr.cssanimations is true
    _Popup.prototype.show = _Popup.prototype._animationShow
    _Popup.prototype.hide = _Popup.prototype._animationHide

  _Popup
