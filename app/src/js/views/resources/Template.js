// Generated by CoffeeScript 1.6.2
define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'template',
    template: Handlebars.templates['template'],
    groupTemplate: Handlebars.templates['template_group'],
    events: {
      'click': 'processClick'
    },
    processClick: function() {
      ovivo.desktop.pages.resources.view.showSubView('template');
      return ovivo.desktop.pages.resources.view.subViews.template.setModel(this.model);
    },
    initialize: function() {
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
