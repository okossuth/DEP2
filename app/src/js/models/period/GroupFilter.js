define(['models/resources/ResourceBase', 'views/period/GroupFilter', 'ovivo'], function(ResourceBase, View) {
  return ResourceBase.extend({
    _gettersNames: ['pk', ['name', 'root']],
    initialize: function(attrs, options) {
      this.set('pk', attrs.root.pk());
      this.count = 1;
      this.View = View;
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
