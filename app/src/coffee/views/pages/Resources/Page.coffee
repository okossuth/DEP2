define [
  'views/pages/PageBase',

  'views/pages/Resources/Templates',
  'views/pages/Resources/Periods',
  'views/pages/Resources/Template',

  'ovivo'
], (PageBase, TemplatesView, PeriodsView, TemplateView) ->
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
      @SubViews = [TemplatesView, PeriodsView, TemplateView]
      @defaultSubView = 'periods'

      @proxyCall 'initialize', arguments

      true