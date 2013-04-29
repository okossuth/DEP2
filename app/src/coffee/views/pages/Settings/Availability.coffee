define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .availability-view'

    name: 'availability'

    events: 
      'click .button-add-new': 'addNew'

    addNew: () ->
      ovivo.desktop.popups.editPopupWorkingHour.show()
      ovivo.desktop.popups.editPopupWorkingHour.createNew()
      
      true

    addWorkingHour: (workingHour) ->
      @workingHours.append workingHour.editView.el

    initialize: () ->
      @workingHours = @$('.working-hours')

      ovivo.desktop.resources.workingHours.on 'add', @addWorkingHour, @

      true