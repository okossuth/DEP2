define [
  'views/popups/Popup',

  '_common/ResourceEditCommon',

  'ovivo'
], (Popup, ResourceEditCommon) ->
  Popup.extend ResourceEditCommon.get Popup.prototype.events