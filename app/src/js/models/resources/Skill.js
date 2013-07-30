define(['models/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    typeName: 'skill',
    _gettersNames: ['pk', 'name', 'primary_department', 'type'],
    initialize: function(attrs, options) {
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
