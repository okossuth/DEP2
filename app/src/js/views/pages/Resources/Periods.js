// Generated by CoffeeScript 1.6.2
define(['views/pages/PageBase', '_features/PercentageIndicator', 'ovivo'], function(PageBase, PercentageIndicator) {
  return PageBase.extend({
    el: '.page.page-resources .content-periods',
    name: 'periods',
    events: {},
    initialize: function() {
      this.$('li.period .percentage').each(function(i, el) {
        return new PercentageIndicator(el, 100, 100, Math.floor(Math.random() * 50 + 50));
      });
      return true;
    }
  });
});