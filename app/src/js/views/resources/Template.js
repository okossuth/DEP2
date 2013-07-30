define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'template',
    template: Handlebars.templates['template'],
    groupTemplate: Handlebars.templates['template_group'],
    events: {
      'click': 'processClick'
    },
    processClick: function() {
      ovivo.desktop.pages.resources.view.showSubView('template');
      ovivo.desktop.pages.resources.view.subViews.template.edit(this.model);
      return ovivo.desktop.pages.resources.view.subViews.templates.highlight(this.$el);
    },
    _periods: function(def) {
      var _keys, _periods, _str;
      _periods = this.model.periods();
      _str = '';
      if ((typeof _periods !== 'object') || ((_keys = _.keys(_periods)).length === 0)) {
        _str = gettext('No periods attached');
      } else {
        _str = _.map(_.keys(_periods), function(id) {
          var _period;
          _period = ovivo.desktop.resources.periods.get(id);
          return _period.view.start_date() + ' – ' + _period.view.end_date();
        }).join(', ');
      }
      return def.resolve(_str);
    },
    periods: function() {
      var _def;
      _def = new $.Deferred();
      ovivo.desktop.resources.periods.def.done(_.bind(_.wrap(_def, this._periods), this));
      return _def;
    },
    initialize: function() {
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
