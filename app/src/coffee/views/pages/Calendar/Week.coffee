define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-calendar .week-view'

    name: 'week'

    events: {}

    initialize: () ->

      true