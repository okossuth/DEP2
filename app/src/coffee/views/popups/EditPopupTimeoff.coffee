define [
  'views/popups/EditPopup',

  'ovivo'
], (EditPopup) ->
  EditPopup.extend
    el: '.popup-timeoff'

    fields: ['start_date', 'end_date', 'reason']

    intialize: () ->
      @_intialize()

      true
