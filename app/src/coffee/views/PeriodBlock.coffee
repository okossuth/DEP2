define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'resource-block'

    template: Handlebars.templates['resourceBlock']
    groupTemplate: Handlebars.templates['resourceBlock_group']

    events:
      'click': 'processClick'

    processClick: () ->

      true

    _getTimeObj: (field) ->
      _obj = new Date Date.parse @date()

      [_hours, _minutes] = @[field]().split(':')
      [_hours, _minutes] = [parseInt(_hours), parseInt(_minutes)]

      _obj.setHours _hours
      _obj.setMinutes _minutes

    adjustPosition: (start, range, height) ->
      _start = @_getTimeObj 'start_time'
      _end = @_getTimeObj 'end_time'

      _scale = height / range

      if _end < _start
        _end.setDate _end.getDate() + 1

      @$el.css
        'height': "#{Math.floor((_end - _start) * _scale)}px"
        'top': "#{Math.floor((_start - start) * _scale)}px"

    initialize: () ->
      @proxyCall 'initialize', arguments

      true