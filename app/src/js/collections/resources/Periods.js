define(['collections/period/Frames', 'models/resources/Period', '_common/ResourceManagerBase', 'ovivo'], function(Frames, Model, ResourceManagerBase) {
  return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, {
    model: Model,
    fullResponse: true,
    url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/periods/",
    _processPeriodAdd: function(model) {
      var _id,
        _this = this;
      _id = model.id;
      return _.each(model.templates(), function(id) {
        return ovivo.desktop.resources.templates.get(id).addPeriod(_id);
      });
    },
    _processPeriodRemove: function(model) {
      var _id,
        _this = this;
      _id = model.id;
      return _.each(model.templates(), function(id) {
        return ovivo.desktop.resources.templates.get(id).removePeriod(_id);
      });
    },
    processPeriodAdd: function(model) {
      var _this = this;
      return ovivo.desktop.resources.templates.def.done(function() {
        return _this._processPeriodAdd(model);
      });
    },
    processPeriodRemove: function(model) {
      var _this = this;
      return ovivo.desktop.resources.templates.def.done(function() {
        return _this._processPeriodRemove(model);
      });
    },
    processFrameUpdate: (function() {
      var _monitorChanges;
      _monitorChanges = ['templates', 'start_date', 'end_date', 'groups'];
      return function(period) {
        var _int;
        _int = _.intersection(_.keys(period.changed), _monitorChanges);
        if (_int.length > 0) {
          this.trigger('updateFrames', period);
        }
        return true;
      };
    })(),
    initialize: function() {
      this.initResource();
      this.on('add', this.processPeriodAdd, this);
      this.on('remove', this.processPeriodRemove, this);
      this.on('change', this.processFrameUpdate, this);
      return true;
    }
  }));
});
