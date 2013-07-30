define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'resource-need',
    template: Handlebars.templates['resourceNeedSkillGroup'],
    groupTemplate: Handlebars.templates['resourceNeedSkillGroup_group'],
    preventChangeRender: true,
    events: {},
    postRender: function() {
      return this.renderDef.resolve();
    },
    matched_employees: function() {
      var _num;
      _num = this.model.matched_employees();
      if (typeof _num !== 'number') {
        return '0';
      } else {
        return _num;
      }
    },
    changeHanlder: function(resourceNeed) {
      var _changed,
        _this = this;
      _changed = _.keys(resourceNeed.changed);
      return _.each(_changed, function(field) {
        var _field, _method, _processMethod;
        _method = "_render" + (field.slice(0, 1).toUpperCase() + field.slice(1));
        _processMethod = "_process" + (field.slice(0, 1).toUpperCase() + field.slice(1));
        if (_this[_method] != null) {
          _this[_method]();
          return;
        }
        if (_this[_processMethod] != null) {
          _this[_processMethod]();
        }
        if (typeof (_field = _this[field]) !== 'function') {
          return;
        }
        return _this.$("." + field + "-value").html(_field.call(_this));
      });
    },
    _attachHandlers: function() {
      this.model.off('rendered', this._attachHandlers);
      this.listenTo(this.resourceNeed(), 'change', this.changeHanlder);
      return this.model.on('change', this.changeHanlder, this);
    },
    _detachHandlers: function() {
      this.stopListening(this.resourceNeed(), 'change', this.changeHanlder);
      return this.model.off('change', this.changeHanlder);
    },
    initialize: function() {
      var _this = this;
      this.renderDef = new $.Deferred();
      this.renderDef.done(function() {
        return _this._attachHandlers();
      });
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
