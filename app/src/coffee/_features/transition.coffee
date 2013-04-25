define [
], () ->
  _animationEndGen = (_def, enterClass, exitClass) ->
    _func = (e) ->
      $(this).removeClass("#{enterClass} #{exitClass} transition back")

      _def.resolve()

      $(this).off 'webkitAnimationEnd', _func

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

    if ovivo.config.PAGE_TRANSITION_ANIMATION is true
      $(next).on 'webkitAnimationEnd ', _animationEndGen _defNext, enterClass, exitClass
      $(prev).on 'webkitAnimationEnd ', _animationEndGen _defPrev, enterClass, exitClass

      if reverse is true
        $(next).addClass('back')
        $(prev).addClass('back')

      $(next).addClass(enterClass).addClass('transition')
      $(prev).addClass(exitClass).addClass('transition')

      $.when(_defNext, _defPrev)

    else
      $(prev).addClass 'hide'
      $(next).removeClass 'hide'

      _def = new $.Deferred()

      _def.resolve()

      _def