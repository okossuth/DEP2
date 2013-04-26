define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .notifications-view'

    name: 'notifications'

    events: {}

    initialize: () ->

      true