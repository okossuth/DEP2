define [
  'ovivo'
], () ->
  _Popup = Backbone.View.extend
    events:
      'click .close': 'close'

    close: () -> @hide()

    show: () ->
      @$el.show()

      $('.popup-overlay').show()

    hide: () ->
      @$el.hide()

      $('.popup-overlay').hide()

    _attachHandlers: do ->
      _animationEnd = ($el) ->
        _handler = () ->

          $el.off ovivo.config.ANIMATION_END, _handler

        _handler

      ($el) ->
        $el.on ovivo.config.ANIMATION_END, _animationEnd($el)

    _attachHandler: (handler) -> 
      @$el.on ovivo.config.ANIMATION_END, @_wrapHanlder handler, @$el

    _wrapHanlder: (handler) ->
      _argsOutter = Array.prototype.slice.call arguments, 1

      _handler = () -> 
        _args = Array.prototype.slice.call arguments, 0

        handler.apply @, [_handler].concat(_argsOutter).concat _args

    _handlerEnterEnd: (handler, $el, e) ->
      $el.removeClass 'enter'

      $el.off ovivo.config.ANIMATION_END, handler

    _handlerExitEnd: (handler, $el, e) ->
      $el.removeClass 'exit'

      $el.hide()

      $el.off ovivo.config.ANIMATION_END, handler

    _animationShow: () ->
      @$el.show()

      @_attachHandler @_handlerEnterEnd

      @$el.addClass 'enter'

      $('.popup-overlay').show()

    _animationHide: () ->
      @_attachHandler @_handlerExitEnd

      @$el.addClass 'exit'

      $('.popup-overlay').hide()

    _initialize: () ->
      
      true

  if Modernizr.cssanimations is true
    _Popup.prototype.show = _Popup.prototype._animationShow
    _Popup.prototype.hide = _Popup.prototype._animationHide

  _Popup
