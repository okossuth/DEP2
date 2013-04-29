define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .timeoff-view'

    name: 'timeoff'

    events: 
      'click .button-add-new': 'addNew'

    addNew: () ->
      ovivo.desktop.popups.editPopupTimeoff.show()
      ovivo.desktop.popups.editPopupTimeoff.createNew()
      
      true

    addInactivity: (inactivity) ->
      @inactivities.append inactivity.editView.el

    initialize: () ->
      @inactivities = @$('.inactivities')

      ovivo.desktop.resources.inactivities.on 'add', @addInactivity, @

      true