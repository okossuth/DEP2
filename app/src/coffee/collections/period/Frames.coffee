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

    processPeriodAdd: (period) ->
      @each (frame) -> frame.addPeriod period

    processPeriodRemove: (period) ->
      @each (frame) -> frame.removePeriod period

    processPeriodChange: (period) ->
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

    changeDisplayMode: (value) ->
      @displayMode = value

      @each (model) -> model.set 'mode', value

    initialize: () ->
      @on 'add', @processFrameAdd, @

      ovivo.desktop.resources.periods.def.done () =>
        ovivo.desktop.resources.periods.on 'add', @processPeriodAdd, @
        ovivo.desktop.resources.periods.on 'remove', @processPeriodRemove, @
        ovivo.desktop.resources.periods.on 'updateFrames', @processPeriodChange, @

        ovivo.desktop.resources.events.def.done () =>
          ovivo.desktop.resources.events.on 'add', @processEventAdd, @
          ovivo.desktop.resources.events.on 'remove', @processEventRemove, @
          ovivo.desktop.resources.events.on 'change', @processEventChange, @

          ovivo.desktop.resources.events.on 'add', @processEventAddEmployees, @
          ovivo.desktop.resources.events.on 'remove', @processEventRemoveEmployees, @
          ovivo.desktop.resources.events.on 'change', @processEventChangeEmployees, @

      true