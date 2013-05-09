// Generated by CoffeeScript 1.6.2
define(['views/pages/PageBase', 'views/pages/Settings/General', 'views/pages/Settings/ResourceNeed', '_features/PercentageIndicator', 'ovivo'], function(PageBase, GeneralView, ResourceNeedView, PercentageIndicator) {
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
      this.proxyCall('initialize', arguments);
      this.$('li.period .percentage').each(function(i, el) {
        return new PercentageIndicator(el, 100, 100, Math.floor(Math.random() * 50 + 50));
      });
      return true;
    }
  });
});
