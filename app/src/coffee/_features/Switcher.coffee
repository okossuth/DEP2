define [
  'ovivo'
], () ->
  _Switcher = (container, data, options) ->
    @container = container

    container.children().each (i, el) -> $(el).addClass('switcher-option').data 'value', data[i]

    container.on 'click', _.bind @_clickHandler, @

    if options? then _.extend @, options

    @

  _.extend _Switcher.prototype, Backbone.Events

  _Switcher.prototype.clear = () -> $('.switcher-option.selected', @container).removeClass('selected')

  _Switcher.prototype._clickHandler = (e) ->
    _el = $(e.target).closest('.switcher-option')

    if _el.length > 0
      _selected = _el.hasClass('selected')

      @clear()

      if @nullable is true and _selected is true
        _value = null

      else
        _value = _el.data 'value'

        _el.addClass 'selected'

      @trigger 'value', _value

    true

  _Switcher.prototype.setValue = (value) ->
    @clear()

    $('.switcher-option', @container).filter((i, el) -> $(el).data('value') is value).addClass('selected')

    @trigger 'value', value

  _Switcher