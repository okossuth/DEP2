define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'period',
    template: Handlebars.templates['period'],
    groupTemplate: Handlebars.templates['period_group'],
    events: {
      'click': 'processClick',
      'click .edit-button': 'editClick'
    },
    _getDateStr: function(_date) {
      if (_date != null) {
        return "" + (_date.getDate()) + ". " + (ovivo.config.MONTHS[_date.getMonth()].toLowerCase().slice(0, 3));
      } else {
        return '';
      }
    },
    start_date: function() {
      return this._getDateStr(new Date(Date.parse(this.model.start_date())));
    },
    end_date: function() {
      return this._getDateStr(new Date(Date.parse(this.model.end_date())));
    },
    _renderValues: function(field, emptyStr, selector) {
      var _items, _list, _str;
      _items = this[field]();
      _str = '';
      _list = this.$(selector);
      if (_items.length > 0) {
        _str = _.map(_items, function(id) {
          return ovivo.desktop.resources[field].get(id).name();
        }).join(', ');
      } else {
        _str = gettext(emptyStr);
        _list.addClass('empty');
      }
      return _list.html(_str);
    },
    renderTemplates: function() {
      return this._renderValues('templates', 'No templates attached', '.templates-list');
    },
    renderGroups: function() {
      return this._renderValues('groups', 'No groups attached', '.groups-list');
    },
    renderPD: function() {
      return this.$('.primary_department-value').html(ovivo.desktop.resources.primaryDepartments.get(this.primary_department()).name());
    },
    postRender: function() {
      ovivo.desktop.resources.templates.def.done(_.bind(this.renderTemplates, this));
      ovivo.desktop.resources.groups.def.done(_.bind(this.renderGroups, this));
      return ovivo.desktop.resources.primaryDepartments.def.done(_.bind(this.renderPD, this));
    },
    processClick: function() {
      ovivo.desktop.pages.resources.view.showSubView('timeline');
      return ovivo.desktop.pages.resources.view.subViews.timeline.setPeriod(this.model);
    },
    editClick: function(e) {
      ovivo.desktop.popups.editPopupPeriod.show();
      ovivo.desktop.popups.editPopupPeriod.edit(this.model);
      e.stopPropagation();
      return false;
    },
    initialize: function() {
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
