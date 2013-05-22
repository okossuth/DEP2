define [
  'views/popups/Popup',

  'ovivo'
], (Popup) ->
  Popup.extend
    el: '.popup-create-new'

    events: _.extend {}, Popup.prototype.events,
      'click .button-create-time': 'createTime'
      'click .button-create-timeoff': 'createTimeoff'

    createTime: () ->
      ovivo.desktop.pages.settings.show()
      ovivo.desktop.pages.settings.view.showSubView('availability')
      ovivo.desktop.popups.editPopupWorkingHour.createNew()

      ovivo.desktop.popups.editPopupWorkingHour.show()
      @close()

    createTimeoff: () ->
      ovivo.desktop.pages.settings.show()
      ovivo.desktop.pages.settings.view.showSubView('timeoff')
      ovivo.desktop.popups.editPopupTimeoff.createNew()

      ovivo.desktop.popups.editPopupTimeoff.show()
      @close()

    initialize: () ->
      @_initialize()

      true
