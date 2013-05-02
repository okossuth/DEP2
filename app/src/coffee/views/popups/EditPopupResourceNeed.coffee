define [
  'views/popups/EditPopup',

  '_features/trailZero',

  'ovivo'
], (EditPopup, trailZero) ->
  EditPopup.extend
    el: '.popup-resource-need'

    fields: ['start_time', 'end_time', 'start_date', 'end_date', 'repeat', 'employee_type', 'skill']

    types: 
      'start_time': String
      'end_time': String
      'start_date': String
      'end_date': String
      'repeat': eval
      'employee_type': String
      'skill': eval

    createNew: () ->
      _now = Date.today()

      _now.moveToFirstDayOfMonth()
      _start = new Date _now

      _now.moveToLastDayOfMonth()
      _end = new Date _now

      @setModel new @collection.model
        start_date: "#{_start.getFullYear()}-#{trailZero(_start.getMonth() + 1)}-#{trailZero(_start.getDate())}"
        end_date: "#{_end.getFullYear()}-#{trailZero(_end.getMonth() + 1)}-#{trailZero(_end.getDate())}"
        start_time: '09:00'
        end_time: '17:00'
        employee_type: 'fulltime'
        num_employees: 1
        repeat: 1
        weekdays: '1,2,3,4,5,6,7'
        skill: ovivo.desktop.resources.skills.at(0)?.pk()

      @initEditMode()

    initialize: () ->
      @collection = ovivo.desktop.resources.resourceNeeds

      @$('.datepicker').pickadate
        format: 'yyyy-mm-dd'
        formatSubmit: 'yyyy-mm-dd'
        firstDay: 1

      @_initialize()

      true
