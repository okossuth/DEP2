define(['_common/ToolsBase', 'ovivo'], function(ToolsBase) {
  return Backbone.View.extend({
    el: '.side-bar',
    TOP_MENU_LINE_HEIGHT: 71,
    events: {
      'click .menu-item': 'processItemClick',
      'click .logo.title': 'showNotifications',
      'click .menu-toggle': 'toggleMenu'
    },
    updateNotifications: function(model, collection, options) {
      var _unread,
        _this = this;
      _unread = ovivo.desktop.resources.notifications.unreadLength();
      this.$('.notifications-indicator-container').fadeOut(300).promise().then(function() {
        if (_unread !== 0) {
          _this.$('.notifications-indicator').html(_unread);
          return _this.$('.notifications-indicator-container').fadeIn(300);
        }
      });
      return true;
    },
    menuItemRegExp: /^menu-item-(.*)$/,
    _collapseMenuClear: function() {
      this.toggler.removeClass('expanded');
      return this.$el.removeClass('expanded');
    },
    _collapseMenu: function() {
      this.menuToggled = false;
      if (ovivo.config.TRANSITION_END != null) {
        this._collapseAction = ToolsBase.onceEventBind(this.$el, ovivo.config.TRANSITION_END, _.bind(this._collapseMenuClear, this));
      } else {
        this._collapseMenuClear();
      }
      return this.$el.height(this.TOP_MENU_LINE_HEIGHT);
    },
    _expandMenu: function() {
      this.menuToggled = true;
      if (this._collapseAction != null) {
        this._collapseAction.cancel();
      }
      this.$el.height(this.menu.offsetHeight);
      this.toggler.addClass('expanded');
      return this.$el.addClass('expanded');
    },
    toggleMenu: function() {
      this.menuToggled = !this.menuToggled;
      if (this.menuToggled === true) {
        this._expandMenu();
      } else {
        this._collapseMenu();
      }
      return true;
    },
    showNotifications: function(e) {
      return ovivo.desktop.pages.notifications.view.showEl();
    },
    _processItem: function(item) {
      if (this.prev != null) {
        this.prev.removeClass('selected');
      } else {
        this.$('.selected').removeClass('selected');
      }
      item.addClass('selected');
      return this.prev = item;
    },
    processItemClick: function(e) {
      var _item;
      _item = $(e.target).closest('.menu-item');
      ovivo.desktop.pages[this.menuItemRegExp.exec(_item[0].id)[1]].show();
      this._processItem(_item);
      return true;
    },
    setPage: function(name) {
      var _item;
      _item = this.$('#menu-item-' + name);
      return this._processItem(_item);
    },
    renderUser: function() {
      this.$('.user-name-value').html("" + (ovivo.desktop.resources.user.first_name()) + " " + (ovivo.desktop.resources.user.last_name()));
      return this._checkMenu();
    },
    _checkMenu: function() {
      if (this.menu.offsetHeight > this.TOP_MENU_LINE_HEIGHT) {
        this.$el.addClass('expandable');
      } else if (this.$el.hasClass('expandable')) {
        this.$el.removeClass('expandable');
        this._collapseMenu();
      }
      return true;
    },
    initialize: function() {
      this.menuToggled = false;
      this.menu = this.$('ul.menu')[0];
      this.toggler = this.$('.menu-toggle');
      ToolsBase.bounceRepeater(50, 5, _.bind(this._checkMenu, this))();
      $(window).on('resize', _.bind(this._checkMenu, this));
      ovivo.desktop.resources.notifications.on('reset', this.updateNotifications, this);
      ovivo.desktop.resources.notifications.on('add', this.updateNotifications, this);
      ovivo.desktop.resources.user.def.done(_.bind(this.renderUser, this));
      return true;
    }
  });
});
