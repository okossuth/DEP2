define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .availability-view'

    name: 'availability'

    events: {}

    initialize: () ->

      true