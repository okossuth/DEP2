define [
  'views/popups/EditPopup',

  'ovivo'
], (EditPopup) ->
  EditPopup.extend
    el: '.popup-working-hour'

    fields: ['start_time', 'end_time', 'available', 'start_date', 'end_date', 'repeat']

    intialize: () ->
      @_intialize()

      true
