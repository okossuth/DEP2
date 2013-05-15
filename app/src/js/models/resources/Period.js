// Generated by CoffeeScript 1.6.2
define(['models/resources/ResourceBase', 'views/resources/Period', '_features/RuleCompiler', 'ovivo'], function(ResourceBase, View, RuleCompiler) {
  return ResourceBase.extend({
    typeName: 'period',
    localStorageOnly: true,
    _gettersNames: ['pk', 'start_date', 'end_date', 'templates', 'primary_department', 'groups'],
    changePD: function() {
      this.set('templates', []);
      return this.set('groups', []);
    },
    changeTemplates: function() {
      var _cur, _new, _prev, _removed,
        _this = this;

      if (this.id == null) {
        return true;
      }
      _cur = this.templates();
      _prev = this.previous('templates');
      _removed = _.without.apply(_, [_prev].concat(_cur));
      _new = _.without.apply(_, [_cur].concat(_prev));
      _.each(_removed, function(id) {
        return ovivo.desktop.resources.templates.get(id).removePeriod(_this.id);
      });
      return _.each(_new, function(id) {
        return ovivo.desktop.resources.templates.get(id).addPeriod(_this.id);
      });
    },
    removeTemplate: function(id) {
      var _arr, _i, _val;

      _val = [];
      _arr = this.templates();
      _.each(_arr, function(el) {
        return _val.push(el);
      });
      _i = _val.indexOf(id);
      if (_i !== -1) {
        _val.splice(_i, 1);
      }
      return this.set('templates', _val);
    },
    compile: function(start, end) {
      var _arr,
        _this = this;

      if (start == null) {
        start = new Date(Date.parse(this.start_date()));
      }
      if (end == null) {
        end = new Date(Date.parse(this.end_date()));
      }
      _arr = [];
      _.each(_.map(this.templates(), function(tId) {
        return ovivo.desktop.resources.templates.get(tId);
      }), function(t) {
        return _.each(_.map(t.resource_needs(), function(rnId) {
          return ovivo.desktop.resources.resourceNeeds.get(rnId);
        }), function(rn) {
          return _arr = _arr.concat(RuleCompiler.compile(rn, start, end, _this.start_date(), _this.end_date(), t.repeat(), rn.weekdaysHash));
        });
      });
      return _arr;
    },
    initialize: function(attrs, options) {
      this.View = View;
      this.on('change:templates', this.changeTemplates, this);
      this.on('change:primary_department', this.changePD, this);
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
