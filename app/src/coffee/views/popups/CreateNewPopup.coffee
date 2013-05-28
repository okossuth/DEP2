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

      ovivo.desktop.popups.editPopupResourceNeed.show()

      @close()

    show: (singleFlag, date) ->
      @date = date

      if singleFlag is true
        @mode = 'create-single'

      else
        @mode = 'create'

      Popup.prototype.show.call @

    initialize: () ->
      @_initialize()

      true