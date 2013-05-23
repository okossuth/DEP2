define [
  '_common/AnimationControl',

  'ovivo'
], (AnimationControl) ->
  _obj = _.extend {}, AnimationControl,
    _handlerEnterEnd: (handler, $el, e) ->
      $el.removeClass 'enter'

      $el.off ovivo.config.ANIMATION_END, handler

    _handlerExitEnd: (handler, $el, e) ->
      $el.removeClass 'exit'

      $el.addClass 'hide'

      $el.off ovivo.config.ANIMATION_END, handler

    showEl: () ->
      @$el.removeClass 'hide'

      @_attachHandler @_handlerEnterEnd

      @$el.addClass 'enter'

    hideEl: () ->
      @_attachHandler @_handlerExitEnd

      @$el.addClass 'exit'

  if Modernizr.cssanimations is true
    _obj

  else {}