define(['models/resources/Template', '_common/ResourceManagerBase', 'ovivo'], function(Model, ResourceManagerBase) {
  return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, {
    model: Model,
    fullResponse: true,
    url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/templates/",
    _ignoreChange: ['periods'],
    _processTemplateAdd: function(model) {
      var _id,
        _this = this;
      _id = model.id;
      return _.each(model.resource_needs(), function(id) {
        return ovivo.desktop.resources.resourceNeeds.get(id).addTemplate(_id);
      });
    },
    _processTemplateRemove: function(model) {
      var _id,
        _this = this;
      _id = model.id;
      return _.each(model.resource_needs(), function(id) {
        return ovivo.desktop.resources.resourceNeeds.get(id).removeTemplate(_id);
      });
    },
    processTemplateAdd: function(model) {
      var _this = this;
      return ovivo.desktop.resources.resourceNeeds.def.done(function() {
        return _this._processTemplateAdd(model);
      });
    },
    processTemplateRemove: function(model) {
      var _this = this;
      return ovivo.desktop.resources.resourceNeeds.def.done(function() {
        return _this._processTemplateRemove(model);
      });
    },
    processRemove: function(model) {
      var _periods;
      if ((_periods = model.periods()) == null) {
        return;
      }
      return _.each(_.keys(_periods), function(id) {
        var _period;
        _period = ovivo.desktop.resources.periods.get(id);
        if (_period == null) {
          return;
        }
        return _period.removeTemplate(model.id);
      });
    },
    passFrameUpdate: function(model) {
      return _.each(_.keys(model.periods()), function(id) {
        var _period;
        _period = ovivo.desktop.resources.periods.get(id);
        if (_period == null) {
          return;
        }
        return ovivo.desktop.resources.periods.trigger('updateFrames', _period);
      });
    },
    processFrameUpdate: (function() {
      var _monitorChanges;
      _monitorChanges = ['resource_needs'];
      return function(template) {
        var _int;
        _int = _.intersection(_.keys(template.changed), _monitorChanges);
        if (_int.length > 0) {
          this.passFrameUpdate(template);
        }
        return true;
      };
    })(),
    initialize: function() {
      this.initResource();
      this.on('add', this.processTemplateAdd, this);
      this.on('remove', this.processTemplateRemove, this);
      this.on('remove', this.processRemove, this);
      this.on('change', this.processFrameUpdate, this);
      return true;
    }
  }));
});
