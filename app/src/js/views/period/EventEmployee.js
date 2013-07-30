define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'activity',
    template: Handlebars.templates['employeeActivity'],
    groupTemplate: Handlebars.templates['employeeActivity_group'],
    events: {},
    postRender: function() {
      return this.$el.addClass(this.type);
    },
    initialize: function(attrs, options) {
      this.type = options.type;
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
