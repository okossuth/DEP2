define [
  'views/pages/PageBase',

  'views/pages/Settings/General',
  'views/pages/Settings/ResourceNeed',

  '_features/PercentageIndicator',

  'ovivo'
], (PageBase, GeneralView, ResourceNeedView, PercentageIndicator) ->
  PageBase.extend
    el: '.page.page-resources'

    events: () -> _.extend {}, PageBase.prototype.events, {}

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      true

    initialize: () ->
      @proxyCall 'initialize', arguments

      @$('li.period .percentage').each (i, el) -> 
        new PercentageIndicator el, 100, 100, Math.floor(Math.random() * 50 + 50)

      true