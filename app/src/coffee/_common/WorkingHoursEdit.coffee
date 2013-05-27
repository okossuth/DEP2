define [
  '_features/trailZero',

  'ovivo'
], (trailZero) ->
  fields: ['start_time', 'end_time', 'available', 'start_date', 'end_date', 'repeat']

  types: 
    'start_time': String
    'end_time': String
    'available': Boolean
    'start_date': String
    'end_date': String
    'repeat': Number

  modes: ['edit', 'create', 'create-single', 'edit-single']

  startDateChangeHandler: () ->
    _date = new Date Date.parse @start_date()

    @set 'end_date', @start_date()

    _day = _date.getDay()
    if _day is 0 then _day = 7

    @set 'weekdays', _day.toString()

  attachHandlers: (mode) ->
    if mode.match(/single/) isnt null
      @model.on 'change:start_date', @startDateChangeHandler, @model

      @startDateChangeHandler.call @model

  detachHandlers: (mode) ->
    @model.off 'change:start_date', @startDateChangeHandler

  createNew: (obj, mode) ->
    if not obj? then obj = {}

    _now = Date.today()

    _now.moveToFirstDayOfMonth()
    _start = new Date _now

    _now.moveToLastDayOfMonth()
    _end = new Date _now

    @setModel (new @collection.model _.extend {
        start_date: "#{_start.getFullYear()}-#{trailZero(_start.getMonth() + 1)}-#{trailZero(_start.getDate())}"
        end_date: "#{_end.getFullYear()}-#{trailZero(_end.getMonth() + 1)}-#{trailZero(_end.getDate())}"
        start_time: '09:00'
        end_time: '17:00'
        available: true
        repeat: 1
        weekdays: '1,2,3,4,5,6,7'
      }, obj), mode

  initializeEdit: () ->
    @collection = ovivo.desktop.resources.workingHours

    @$('.datepicker').pickadate
      format: 'yyyy-mm-dd'
      formatSubmit: 'yyyy-mm-dd'
      firstDay: 1

    true