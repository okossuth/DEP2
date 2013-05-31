define [
  'views/popups/EditPopup',

  '_common/InactivityEdit',

  'ovivo'
], (EditPopup, InactivityEdit) ->
  EditPopup.extend _.extend InactivityEdit,
    el: '.popup-timeoff'

    initialize: () ->
      @initializeEdit()

      @_initialize()
