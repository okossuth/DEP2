// Generated by CoffeeScript 1.6.2
define(['models/resources/Template', '_common/ResourceManagerBase', 'ovivo'], function(Model, ResourceManagerBase) {
  return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, {
    model: Model,
    fullResponse: true,
    localStorageOnly: true,
    url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/templates/",
    _ignoreChange: ['periods', 'resource_needs'],
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
    initialize: function() {
      this.initResource();
      this.on('add', this.processTemplateAdd, this);
      this.on('remove', this.processTemplateRemove, this);
      return true;
    }
  }));
});
