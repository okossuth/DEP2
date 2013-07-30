define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'employee',
    template: Handlebars.templates['eventUser'],
    groupTemplate: Handlebars.templates['eventUser_group'],
    events: {},
    postRender: function() {
      return this.$el.addClass(this.type());
    },
    initialize: function() {
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
