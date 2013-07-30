define(['models/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    _gettersNames: ['pk', 'first_name', 'last_name', 'name', 'groups', 'skills', 'email', 'email_confirmed', 'mobile_phone_prefix', 'mobile_phone'],
    initialize: function(attrs, options) {
      this.attributes.name = attrs.first_name + ' ' + attrs.last_name;
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
