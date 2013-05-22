// Generated by CoffeeScript 1.6.2
define(['models/resources/ResourceNeed', '_common/ResourceManagerBase', '_common/CachableCollection', 'ovivo'], function(Model, ResourceManagerBase, CachableCollection) {
  return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, CachableCollection.get(['primary_department']), {
    model: Model,
    fullResponse: true,
    localStorageOnly: true,
    url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/",
    processRange: function(start, end) {
      return this.reduce((function(arr, workingHour) {
        return arr.concat(workingHour.processRange(start, end));
      }), []);
    },
    _ignoreChange: ['checked', 'deltaHours', 'templates'],
    initialize: function() {
      this.initResource();
      this.initCacheProcessors();
      return true;
    }
  }));
});