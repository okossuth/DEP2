define [
  'views/popups/Popup',

  'ovivo'
], (Popup) ->
  Popup.extend
    el: '.popup-create-new'

    events: _.extend {}, Popup.prototype.events,
      'click .button-create-resource-need': 'createResourceNeed'

    createResourceNeed: () ->
      ovivo.desktop.pages.settings.show()
      ovivo.desktop.pages.settings.view.showSubView('resourceNeed')
      ovivo.desktop.popups.editPopupResourceNeed.createNew()

      @close()
      ovivo.desktop.popups.editPopupResourceNeed.show()

    initialize: () ->
      @_initialize()

      true
