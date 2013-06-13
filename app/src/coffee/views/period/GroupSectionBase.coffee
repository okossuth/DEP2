define [
  'ovivo'
], () ->
  _animateFolding: (_val, val) ->
    if _val isnt val
      _frac = (val - _val) / @MIN_BLOCK_HEIGHT

      @el.style.opacity = Math.pow(1 - _frac, 2)

      @$el.addClass 'folding'

      if ovivo.config.TRANSFORM isnt false
        @el.style[ovivo.config.TRANSFORM] = "translate(0, #{@MIN_BLOCK_HEIGHT * _frac}px) scale(#{1 - 0.05 * Math.pow(_frac, 2)}) rotateX(#{60 * Math.pow(_frac, 2)}deg)"

    else @_clearFolding()

    true

  _animateHeader: (_val, val) ->
    if ovivo.config.TRANSFORM isnt false
      @header.style[ovivo.config.TRANSFORM] = "translate(0, #{_val}px)"

    else
      @header.style.top = "#{_val}px"

  _clearFolding: () ->
    @el.style.opacity = ''

    @$el.removeClass 'folding'

    if ovivo.config.TRANSFORM isnt false
        @el.style[ovivo.config.TRANSFORM] = ''

    true

  _clearHeader: () ->
    if ovivo.config.TRANSFORM isnt false
      @header.style[ovivo.config.TRANSFORM] = ''

    else
      @header.style.top = ''