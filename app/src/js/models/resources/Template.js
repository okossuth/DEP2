define(['models/resources/ResourceBase', 'views/resources/Template', 'ovivo'], function(ResourceBase, View) {
  return ResourceBase.extend({
    typeName: 'template',
    _gettersNames: ['pk', 'name', 'resource_needs', 'primary_department', 'periods'],
    changePD: function() {
      return this.set('resource_needs', []);
    },
    toJSON: function() {
      var _json;
      _json = Backbone.Model.prototype.toJSON.call(this);
      delete _json.periods;
      return _json;
    },
    finishCopy: function(model) {
      return this.set('periods', model.periods());
    },
    postEditSync: function(collection, model, originalModel) {
      return this.resourceNeedsChange(originalModel.resource_needs());
    },
    resourceNeedsChange: function(_prev) {
      var _cur, _new, _removed,
        _this = this;
      if (this.id == null) {
        return true;
      }
      _cur = this.resource_needs();
      _removed = _.without.apply(_, [_prev].concat(_cur));
      _new = _.without.apply(_, [_cur].concat(_prev));
      _.each(_removed, function(id) {
        return ovivo.desktop.resources.resourceNeeds.get(id).removeTemplate(_this.id);
      });
      return _.each(_new, function(id) {
        return ovivo.desktop.resources.resourceNeeds.get(id).addTemplate(_this.id);
      });
    },
    removeResourceNeed: function(id) {
      var _arr, _i, _val;
      _val = [];
      _arr = this.resource_needs();
      _.each(_arr, function(el) {
        return _val.push(el);
      });
      _i = _val.indexOf(id);
      if (_i !== -1) {
        _val.splice(_i, 1);
      }
      return this.set('resource_needs', _val);
    },
    addPeriod: function(id) {
      var _obj;
      _obj = _.extend({}, this.periods());
      _obj[id] = true;
      return this.set('periods', _obj);
    },
    removePeriod: function(id) {
      var _obj;
      _obj = _.extend({}, this.periods());
      delete _obj[id];
      return this.set('periods', _obj);
    },
    changePrimaryDepartment: function(model) {
      var _periods;
      _periods = this.periods();
      if (typeof _periods === 'object') {
        return _.each(_.keys(_periods), function(id) {
          return ovivo.desktop.resources.periods.get(id).removeTemplate(model.id);
        });
      }
    },
    updatePreviousResourceNeeds: function() {
      return this.prevResourceNeeds = this.previous('resource_needs');
    },
    initialize: function(attrs, options) {
      this.View = View;
      this.on('change:primary_department', this.changePD, this);
      this.on('change:resource_needs', this.updatePreviousResourceNeeds, this);
      this.on('change:primary_department', this.changePrimaryDepartment, this);
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
