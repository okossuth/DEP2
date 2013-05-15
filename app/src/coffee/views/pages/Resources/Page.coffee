define [
  'views/pages/PageBase',

  'views/pages/Resources/Templates',
  'views/pages/Resources/Periods',
  'views/pages/Resources/Template',
  'views/pages/Resources/Timeline',

  'ovivo'
], (PageBase, TemplatesView, PeriodsView, TemplateView, TimelineView) ->
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
      @SubViews = [TemplatesView, PeriodsView, TemplateView, TimelineView]
      @defaultSubView = 'periods'

      @proxyCall 'initialize', arguments

      true