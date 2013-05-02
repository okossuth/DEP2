define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .resource-need-view'

    name: 'resourceNeed'

    events: 
      'click .button-add-new': 'addNew'

    addNew: () ->
      ovivo.desktop.popups.editPopupResourceNeed.show()
      ovivo.desktop.popups.editPopupResourceNeed.createNew()
      
      true

    addResourceNeed: (resourceNeed) ->
      @resourceNeeds.append resourceNeed.editView.el

    initialize: () ->
      @resourceNeeds = @$('.resource-needs')

      ovivo.desktop.resources.resourceNeeds.on 'add', @addResourceNeed, @

      true