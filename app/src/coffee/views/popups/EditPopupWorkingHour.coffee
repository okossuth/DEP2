define [
  'views/popups/EditPopup',

  '_common/WorkingHoursEdit',

  'ovivo'
], (EditPopup, WorkingHoursEdit, trailZero) ->
  EditPopup.extend _.extend WorkingHoursEdit,
    el: '.popup-working-hour'

    initialize: () ->
      @initializeEdit()

      @_initialize()