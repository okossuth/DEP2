define(['views/pages/PageBase', 'views/pages/Calendar/Month', 'views/pages/Calendar/Week', '_features/Switcher', 'ovivo'], function(PageBase, MonthView, WeekView, Switcher) {
  return PageBase.extend({
    el: '.page.page-calendar',
    events: function() {
      return _.extend({}, PageBase.prototype.events, {
        'click .navigate-left': 'prev',
        'click .navigate-right': 'next',
        'click .today': 'today',
        'click .button-create-new': 'createNew',
        'click .button-resources': 'navigateResources',
        'click .add-groups': 'addGroupsClick'
      });
    },
    addGroupsClick: function() {
      if (ovivo.config.TRANSFORM === false) {
        this.$('.add-groups').toggleClass('swap-icons');
      } else {
        this.$('.add-groups').toggleClass('rotate');
      }
      return this.$('.groups-popup').toggle(300);
    },
    navigateResources: function() {
      return ovivo.desktop.pages.resources.show();
    },
    prev: function() {
      return this.subViews[this.mode].prev();
    },
    next: function() {
      return this.subViews[this.mode].next();
    },
    processScroll: function(e) {
      if (this.subViews[this.mode].processScroll != null) {
        this.subViews[this.mode].processScroll();
      }
      return true;
    },
    _postNavigate: function() {
      if (this.subViews[this.mode]._postNavigate != null) {
        this.subViews[this.mode]._postNavigate();
      }
      return true;
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
      this._postNavigate();
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
    processWeekViewSwitcherValue: function(value) {
      this.$el.removeClass('employees-mode periods-mode').addClass("" + value + "-mode");
      return ovivo.desktop.resources.frames.changeDisplayMode(value);
    },
    initialize: function() {
      this.SubViews = [WeekView];
      this.defaultSubView = 'week';
      this.on('subViewChange', this.processSubViewChange, this);
      this.viewSwitcher = new Switcher(this.$('.switcher-view'), ['week', 'month']);
      this.viewSwitcher.on('value', this.processViewSwitcherValue, this);
      this.weekViewSwitcher = new Switcher(this.$('.week-view-switcher'), ['employees', 'periods']);
      this.weekViewSwitcher.on('value', this.processWeekViewSwitcherValue, this);
      this.weekViewSwitcher.setValue('employees');
      this.$('.scroller').on('scroll', _.bind(this.processScroll, this));
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
