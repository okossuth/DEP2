define(['models/resources/UserModel', '_common/CachableCollection', '_common/ResourceManagerBase', 'ovivo'], function(Model, CachableCollection, ResourceManagerBase) {
  return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, CachableCollection.get(['skills', 'groups']), {
    model: Model,
    fullResponse: true,
    url: "" + ovivo.config.API_URL_PREFIX + "users/?type=employees",
    initialize: function() {
      this.initCacheProcessors();
      this.initResource();
      return true;
    }
  }));
});
