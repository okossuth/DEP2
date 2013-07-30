define(['views/pages/PageBase', 'views/pages/Resources/Templates', 'views/pages/Resources/Periods', 'views/pages/Resources/Template', 'views/pages/Resources/Timeline', 'ovivo'], function(PageBase, TemplatesView, PeriodsView, TemplateView, TimelineView) {
  return PageBase.extend({
    el: '.page.page-resources',
    events: function() {
      return _.extend({}, PageBase.prototype.events, {
        'click .button-close': 'clickClose'
      });
    },
    clickClose: function(e) {
      ovivo.desktop.pages.calendar.show();
      e.stopPropagation();
      return false;
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
      this.SubViews = [TemplatesView, PeriodsView, TemplateView, TimelineView];
      this.defaultSubView = 'periods';
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
