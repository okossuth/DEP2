define [
], () ->
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