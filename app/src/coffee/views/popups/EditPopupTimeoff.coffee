define [
  'views/popups/EditPopup',

  '_features/trailZero',

  'ovivo'
], (EditPopup, trailZero) ->
  EditPopup.extend
    el: '.popup-timeoff'

    fields: ['start', 'end', 'reason']

    types: 
      'start': String
      'end': String
      'reason': String

    createNew: () ->
      _now = Date.today()
      _now.setWeek _now.getWeek() + 1
      _now.moveToDayOfWeek(1)

      _start = new Date _now

      _now.moveToDayOfWeek(5)
      _end = new Date _now

      @setModel new @collection.model
        start: "#{_start.getFullYear()}-#{trailZero(_start.getMonth() + 1)}-#{trailZero(_start.getDate())}"
        end: "#{_end.getFullYear()}-#{trailZero(_end.getMonth() + 1)}-#{trailZero(_end.getDate())}"
        reason: ''
        municipality: ovivo.desktop.resources.municipalities.at(0).id

      @$('.button-add').show()

    initialize: () ->
      @collection = ovivo.desktop.resources.inactivities

      @_initialize()

      true
