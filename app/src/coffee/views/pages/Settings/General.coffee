define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .general-view'

    name: 'general'

    events: {}

    initialize: () ->

      true