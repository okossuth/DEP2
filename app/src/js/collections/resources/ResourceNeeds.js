define(['models/resources/ResourceNeed', '_common/ResourceManagerBase', '_common/CachableCollection', 'ovivo'], function(Model, ResourceManagerBase, CachableCollection) {
  return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, CachableCollection.get(['primary_department']), {
    model: Model,
    fullResponse: true,
    url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/",
    processRange: function(start, end) {
      return this.reduce((function(arr, workingHour) {
        return arr.concat(workingHour.processRange(start, end));
      }), []);
    },
    _ignoreChange: ['checked', 'deltaHours', 'templates'],
    processRemove: function(model) {
      var _templates;
      if ((_templates = model.templates()) == null) {
        return;
      }
      return _.each(_.keys(_templates), function(id) {
        var _template;
        _template = ovivo.desktop.resources.templates.get(id);
        if (_template == null) {
          return;
        }
        return _template.removeResourceNeed(model.id);
      });
    },
    passFrameUpdate: function(model) {
      return _.each(_.keys(model.templates()), function(id) {
        var _template;
        _template = ovivo.desktop.resources.templates.get(id);
        if (_template == null) {
          return;
        }
        return ovivo.desktop.resources.templates.passFrameUpdate(_template);
      });
    },
    processFrameUpdate: (function() {
      var _monitorChanges;
      _monitorChanges = ['repeat', 'weekdays', 'skill'];
      return function(resourceNeed) {
        var _int;
        _int = _.intersection(_.keys(resourceNeed.changed), _monitorChanges);
        if (_int.length > 0) {
          this.passFrameUpdate(resourceNeed);
        }
        return true;
      };
    })(),
    initialize: function() {
      this.initResource();
      this.initCacheProcessors();
      this.on('remove', this.processRemove, this);
      this.on('change', this.processFrameUpdate, this);
      return true;
    }
  }));
});
