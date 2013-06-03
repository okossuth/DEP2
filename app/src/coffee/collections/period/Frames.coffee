define [
  'models/period/Frame',

  'ovivo'
], (Model) ->
  Backbone.Collection.extend
    model: Model

    doNotFetch: true

    addFrame: (start, end) ->
      _model = new Model
        start: start
        end: end

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

    initialize: () ->
      @on 'add', @processFrameAdd, @

      ovivo.desktop.resources.periods.def.done () =>
        ovivo.desktop.resources.periods.on 'add', @processPeriodAdd, @
        ovivo.desktop.resources.periods.on 'remove', @processPeriodRemove, @
        ovivo.desktop.resources.periods.on 'updateFrames', @processPeriodChange, @

      true