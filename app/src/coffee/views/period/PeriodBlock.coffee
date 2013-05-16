define [
  'views/resources/ResourceBase',

  '_common/ToolsBase',

  'ovivo'
], (ResourceBase, ToolsBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'resource-block'

    template: Handlebars.templates['resourceBlock']
    groupTemplate: Handlebars.templates['resourceBlock_group']

    events:
      'click': 'processClick'

    processClick: () ->
      ovivo.desktop.popups.periodBlockPopup.render 
        groups: _.map @model.groupsHash, (arr, pk) ->
          groupName: ovivo.desktop.resources.groups.get(pk).chainName()
          hours: _.map arr, (hour) ->
            name: ovivo.desktop.resources.users.get(hour.user()).name()
            start_time: hour.start_time()
            end_time: hour.end_time()

        block: @

      ovivo.desktop.popups.periodBlockPopup.show()

      true

    exposeAttrs: (ToolsBase.once 'exposeAttrs', () -> _.each @model._gettersNames, (name) =>
      if name instanceof Array then name = name[0]

      if not @constructor.prototype[name]? then @constructor.prototype[name] = () -> @model[name]())

    _getTimeObj: (field) ->
      _obj = new Date Date.parse @date()

      [_hours, _minutes] = @[field]().split(':')
      [_hours, _minutes] = [parseInt(_hours), parseInt(_minutes)]

      _obj.setHours _hours
      _obj.setMinutes _minutes

    updateGroup: (group) ->
      @$(".group-#{group} .available").html @model.groupsHash[group].length

    postRender: () ->
      @$('.required').html @num_employees()

    groups: () ->
      _.map @model.groups(), (pk) =>
        pk: pk
        num_employees: @num_employees()
        available: @model.groupsHash[pk]?.length

    adjustPosition: (start, range, height) ->
      _start = @_getTimeObj 'start_time'
      _end = @_getTimeObj 'end_time'

      _scale = height / range

      if _end < _start
        _end.setDate _end.getDate() + 1

      @$el.css
        'height': "#{Math.floor((_end - _start) * _scale)}px"
        'line-height': "#{Math.floor((_end - _start) * _scale) - 4}px"
        'top': "#{Math.floor((_start - start) * _scale)}px"

    initialize: () ->
      @proxyCall 'initialize', arguments

      true