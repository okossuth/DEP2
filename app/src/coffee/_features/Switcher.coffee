define [
  'ovivo'
], () ->
  _Switcher = (container, data) ->
    @container = container

    container.children().each (i, el) -> $(el).addClass('switcher-option').data 'value', data[i]

    container.on 'click', _.bind @_clickHandler, @

    @

  _.extend _Switcher.prototype, Backbone.Events

  _Switcher.prototype.clear = () -> $('.switcher-option.selected', @container).removeClass('selected')

  _Switcher.prototype._clickHandler = (e) ->
    _el = $(e.target).closest('.switcher-option')

    if _el.length > 0
      @clear()

      _el.addClass 'selected'

      _value = _el.data 'value'

      if @value isnt _value
        @trigger 'value', @value = _value

    true

  _Switcher.prototype.setValue = (value) ->
    if @value isnt value
      @clear()

      $('.switcher-option', @container).filter((i, el) -> $(el).data('value') is value).addClass('selected')

      @trigger 'value', @value = value

  _Switcher