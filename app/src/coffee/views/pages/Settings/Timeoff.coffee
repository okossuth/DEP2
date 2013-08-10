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
      ovivo.desktop.popups.editPopupTimeoff.create()
      
      true

    addInactivity: (inactivity) ->
      @inactivities.append inactivity.editView.el

    updateScrollers: () ->
      @baseView.updateScrollProcessors()

    initialize: () ->
      @inactivities = @$('.inactivities')

      ovivo.desktop.resources.inactivities.on 'add', @addInactivity, @

      ovivo.desktop.resources.inactivities.def.done () =>
        ovivo.desktop.resources.inactivities.on 'add', @updateScrollers, @
        ovivo.desktop.resources.inactivities.on 'remove', @updateScrollers, @

      true