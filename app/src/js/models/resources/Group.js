// Generated by CoffeeScript 1.6.2
define(['models/resources/ResourceBase', 'ovivo'], function(ResourceBase, View, EditView, validators) {
  return ResourceBase.extend({
    typeName: 'group',
    _gettersNames: ['pk', 'name'],
    initialize: function(attrs, options) {
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
