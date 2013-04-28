define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .timeoff-view'

    name: 'timeoff'

    events: {}

    initialize: () ->

      true