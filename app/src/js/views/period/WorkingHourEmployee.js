define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'activity',
    template: Handlebars.templates['employeeActivity'],
    groupTemplate: Handlebars.templates['employeeActivity_group'],
    events: {},
    postRender: function() {
      return this.$el.removeClass('available unavailable').addClass(this.available() === true ? 'available' : 'unavailable');
    },
    initialize: function(attrs, options) {
      this.proxyCall('initialize', arguments);
      options.block.on('remove', this._processRemove, this);
      return true;
    }
  });
});
