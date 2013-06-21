define [
  'models/period/Frame',

  'ovivo'
], (Model) ->
  Backbone.Collection.extend
    model: Model

    doNotFetch: true

    addFrame: (start, end, options) ->
      _model = new Model {
          start: start
          end: end
          mode: @displayMode
        }, options

      @add _model

      _model

    processFrameAdd: (frame) ->
      ovivo.desktop.resources.periods.def.done () ->
        ovivo.desktop.resources.periods.each (period) ->
          frame.addPeriod period

      ovivo.desktop.resources.workingHours.def.done () ->
        ovivo.desktop.resources.workingHours.each (wh) ->
          frame.addWorkingHour wh

    processPeriodAdd: (period) ->
      @each (frame) -> frame.addPeriod period

    processPeriodRemove: (period) ->
      @each (frame) -> frame.removePeriod period

    processPeriodUpdateFrames: (period) ->
      @each (frame) -> frame.changePeriod period

    processEventAdd: (event) ->
      if not event.skill()? then return

      @each (frame) -> frame.addEvent event

    processEventRemove: (event) ->
      if not event.periodBlock? then return

      event.periodBlock.removeEvent event

    processEventChange: (event) ->
      if event.periodBlock? then return

      @processEventAdd event

    processEventAddEmployees: (event) ->
      if not event.skill()? then return

      @each (frame) -> frame.addEventEmployees event

    processEventRemoveEmployees: (event) ->
      @each (frame) -> frame.removeEventEmployees event

    processEventChangeEmployees: (event) ->
      @each (frame) ->
        frame.removeEventEmployees event
        frame.addEventEmployees event

    processWorkingHourAdd: (wh) ->
      @each (frame) -> frame.addWorkingHour wh

    processWorkingHourRemove: (wh) ->
      @each (frame) -> frame.removeWorkingHour wh

    processWorkingHourChange: (wh) ->
      @each (frame) -> frame.changeWorkingHour wh

    changeDisplayMode: (value) ->
      @displayMode = value

      @each (model) -> model.set 'mode', value

    _handlers:
      periods:
        method: 'processPeriod{{s}}'
        events: ['add', 'remove', 'updateFrames']

      events:
        method: 'processEvent{{s}}'
        events: ['add', 'remove', 'change']

      eventsEmployees:
        method: 'processEvent{{s}}Employees'
        events: ['add', 'remove', 'change']

      workingHours:
        method: 'processWorkingHour{{s}}'
        events: ['add', 'remove', 'change']

    _initHandlers: (resource, handlersGroup) ->
      if not handlersGroup? then handlersGroup = resource

      _.each (_obj = @_handlers[handlersGroup]).events, (event) =>
        _method = _obj.method.replace /\{\{s\}\}/, event.slice(0, 1).toUpperCase() + event.slice(1)

        ovivo.desktop.resources[resource].on event, @[_method], @

    _initSequence: [{
        deps: 'periods'
        func: () ->
          @_initHandlers 'periods'

      }, {
        deps: 'periods,events'
        func: () ->
          @_initHandlers 'events'
          @_initHandlers 'events', 'eventsEmployees'

      }, {
        deps: 'periods,workingHours'
        func: () ->
          @_initHandlers 'workingHours'
      }]

    initialize: () ->
      @on 'add', @processFrameAdd, @

      _.each @_initSequence, (obj) =>
        $.when.apply($, _.map(obj.deps.split(','), (s) -> ovivo.desktop.resources[s].def)).done () =>
          obj.func.call @

      true