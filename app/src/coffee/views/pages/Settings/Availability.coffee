define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .availability-view'

    name: 'availability'

    events: {}

    addWorkingHour: (workingHour) ->
      @workingHours.append workingHour.editView.el

    initialize: () ->
      @workingHours = @$('.working-hours')

      ovivo.desktop.resources.workingHours.on 'add', @addWorkingHour, @

      true