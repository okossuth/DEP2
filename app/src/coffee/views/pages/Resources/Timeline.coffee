define [
  'views/pages/PageBase'

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-resources .content-timeline'

    name: 'timeline'

    events: {}

    close: () ->
      @page.showSubView 'periods'

    initialize: () ->

      true