define [
  'views/pages/PageBase',

  '_features/PercentageIndicator',

  'ovivo'
], (PageBase, PercentageIndicator) ->
  PageBase.extend
    el: '.page.page-resources .content-periods'

    name: 'periods'

    events: {}

    initialize: () ->
      @$('li.period .percentage').each (i, el) -> 
        new PercentageIndicator el, 100, 100, Math.floor(Math.random() * 50 + 50)

      true