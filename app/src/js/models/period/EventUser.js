define(['models/resources/ResourceBase', 'views/period/EventUser', 'ovivo'], function(ResourceBase, View) {
  return ResourceBase.extend({
    _gettersNames: ['event', 'name', 'type', ['pk', 'event']],
    initialize: function(attrs, options) {
      this.View = View;
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
