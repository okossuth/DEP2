define [
], () ->
  _PercentageIndicator = (container, width, height, value) ->
    @container = $ container

    @canvas = $ 'canvas', @container
    @valueSpan = $ '.value', @container

    @value = value

    @ctx = @canvas[0]?.getContext '2d'

    [@canvas[0]?.width, @canvas[0]?.height] = [width, height]

    @_render()

    @

  _PercentageIndicator.prototype._render = () ->
    if @ctx?
      @ctx.beginPath()

      @ctx.arc 50, 50, 40, 1.5 * Math.PI - 2 * Math.PI * (@value / 100), 1.5 * Math.PI

      @ctx.strokeStyle = "007550"
      @ctx.lineWidth = 7

      @ctx.stroke()

      @valueSpan.html @value + '%'

    true

  _PercentageIndicator