define(['views/resources/ResourceBase', '_features/trailZero', 'ovivo'], function(ResourceBase, trailZero) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'availability',
    template: Handlebars.templates['availability'],
    groupTemplate: Handlebars.templates['availability_group'],
    start: function() {
      var _date;
      _date = new Date(Date.parse(this.model.start()));
      return "" + (trailZero(_date.getHours())) + ":" + (trailZero(_date.getMinutes()));
    },
    end: function() {
      var _date;
      _date = new Date(Date.parse(this.model.end()));
      return "" + (trailZero(_date.getHours())) + ":" + (trailZero(_date.getMinutes()));
    },
    events: {},
    renderUser: function() {
      return this.$('span.user').html(ovivo.desktop.resources.users.get(this.model.user()).name());
    },
    postRender: function() {
      return ovivo.desktop.resources.users.def.then(_.bind(this.renderUser, this));
    },
    initialize: function() {
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
