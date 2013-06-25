define [
], () ->
  _animationEndGen = (_def, enterClass, exitClass) ->
    _func = (e) ->
      $(this).addClass('post-animation')

      _def.resolve()

      $(this).off ovivo.config.ANIMATION_END, _func

      true

    _func

  transit: (prev, next, enterClass, exitClass, reverse) ->
    _defNext = $.Deferred()
    _defPrev = $.Deferred()

    if reverse is true
      $(next).css 'z-index', 0
      $(prev).css 'z-index', 1

    else
      $(next).css 'z-index', 1
      $(prev).css 'z-index', 0

    if (ovivo.config.PAGE_TRANSITION_ANIMATION is true) and (ovivo.config.ANIMATION_END isnt false)
      $(next).on ovivo.config.ANIMATION_END, _animationEndGen _defNext, enterClass, exitClass
      $(prev).on ovivo.config.ANIMATION_END, _animationEndGen _defPrev, enterClass, exitClass

      if reverse is true
        $(next).addClass('back')
        $(prev).addClass('back')

      $(next).addClass(enterClass).addClass('transition').addClass('next-page')
      $(prev).addClass(exitClass).addClass('transition').addClass('prev-page')

      $.when(_defNext, _defPrev).done () =>
        $(next).removeClass("#{enterClass} transition back next-page post-animation")
        $(prev).removeClass("#{exitClass} transition back prev-page post-animation")

    else
      $(prev).addClass 'hide'
      $(next).removeClass 'hide'

      _def = new $.Deferred()

      _def.resolve()

      _def