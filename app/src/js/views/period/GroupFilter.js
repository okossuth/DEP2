define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'group-filter',
    template: Handlebars.templates['groupFilter'],
    groupTemplate: Handlebars.templates['groupFilter_group'],
    events: {
      'click': 'triggerApply'
    },
    triggerApply: function() {
      return this.model.trigger('apply', this.model);
    },
    apply: function() {
      return this.$el.addClass('selected');
    },
    cancel: function() {
      return this.$el.removeClass('selected');
    },
    postRender: function() {},
    initialize: function() {
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
