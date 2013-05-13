define [
  'views/pages/PageBase',

  '_common/EmptyListDetector',

  'ovivo'
], (PageBase, EmptyListDetector) ->
  PageBase.extend _.extend {}, EmptyListDetector,
    el: '.page.page-settings .resource-need-view'

    name: 'resourceNeed'

    events: 
      'click .button-add-new': 'addNew'

    addNew: () ->
      ovivo.desktop.popups.editPopupResourceNeed.show()
      ovivo.desktop.popups.editPopupResourceNeed.createNew()
      
      true

    addResourceNeed: (model) ->
      _view = model.getEditView 'settingsView'

      @resourceNeeds.append _view.el

    initialize: () ->
      @resourceNeeds = @$('.resource-needs')

      @initEmptyListDetector ovivo.desktop.resources.resourceNeeds

      ovivo.desktop.resources.resourceNeeds.on 'add', @addResourceNeed, @

      true