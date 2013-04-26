define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .connections-view'

    name: 'connections'

    events: {}

    initialize: () ->

      true