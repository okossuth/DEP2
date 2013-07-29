define(['views/pages/PageBase', 'views/pages/Calendar/Month', 'views/pages/Calendar/Week', '_features/Switcher', 'ovivo'], function(PageBase, MonthView, WeekView, Switcher) {
  return PageBase.extend({
    el: '.page.page-calendar',
    events: function() {
      return _.extend({}, PageBase.prototype.events, {
        'click .navigate-left': 'prev',
        'click .navigate-right': 'next',
        'click .today': 'today',
        'click .button-create-new': 'createNew'
      });
    },
    prev: function() {
      return this.subViews[this.mode].prev();
    },
    next: function() {
      return this.subViews[this.mode].next();
    },
    today: function() {
      return this.subViews[this.mode].today();
    },
    createNew: function() {
      return ovivo.desktop.popups.createNewPopup.show();
    },
    transitionStart: function() {
      this.proxyCall('transitionStart', arguments);
      return true;
    },
    transitionComplete: function() {
      this.proxyCall('transitionComplete', arguments);
      return true;
    },
    processViewSwitcherValue: function(value) {
      return this.showSubView(value);
    },
    processSubViewChange: function(name) {
      this.mode = name;
      this.viewSwitcher.setValue(name);
      return true;
    },
    initialize: function() {
      this.SubViews = [MonthView, WeekView];
      this.defaultSubView = 'week';
      this.on('subViewChange', this.processSubViewChange, this);
      this.viewSwitcher = new Switcher(this.$('.switcher-view'), ['week', 'month']);
      this.viewSwitcher.on('value', this.processViewSwitcherValue, this);
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
