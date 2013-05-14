// Generated by CoffeeScript 1.6.2
define(['views/pages/PageBase', 'views/pages/Resources/Templates', 'views/pages/Resources/Periods', 'views/pages/Resources/Template', 'ovivo'], function(PageBase, TemplatesView, PeriodsView, TemplateView) {
  return PageBase.extend({
    el: '.page.page-resources',
    events: function() {
      return _.extend({}, PageBase.prototype.events, {});
    },
    transitionStart: function() {
      this.proxyCall('transitionStart', arguments);
      return true;
    },
    transitionComplete: function() {
      this.proxyCall('transitionComplete', arguments);
      return true;
    },
    initialize: function() {
      this.SubViews = [TemplatesView, PeriodsView, TemplateView];
      this.defaultSubView = 'periods';
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});