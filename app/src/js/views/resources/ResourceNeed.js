define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'resource-need element',
    template: Handlebars.templates['resourceNeed'],
    groupTemplate: Handlebars.templates['resourceNeed_group'],
    groupsTemplate: Handlebars.templates['groupsResourceNeed'],
    events: {
      'mouseenter': 'processMouseEnter',
      'mouseleave': 'processMouseLeave',
      'click': 'processClick'
    },
    processMouseEnter: function() {
      return this.model.highlight();
    },
    processMouseLeave: function() {
      return this.model.removeHighlight();
    },
    processClick: function() {
      ovivo.desktop.popups.editPopupResourceNeed.show();
      return ovivo.desktop.popups.editPopupResourceNeed.edit(this.model);
    },
    available: function() {
      if (this.model.available() === true) {
        return gettext('Available');
      } else {
        return gettext('Unavailable');
      }
    },
    postRender: function() {},
    _checkMatch: function(av_, need) {
      var end, start, _end, _start;
      _start = av_.startValue;
      _end = av_.endValue;
      start = need.startValue;
      end = need.endValue;
      return (_start >= start) && (_end <= end);
    },
    _addAvailability: function(model) {
      var _container, _el;
      _el = model.getView().el;
      _container = this.$('li.group-' + model.group() + ' ul.availabilities');
      return _container.append(_el);
    },
    addAvailability: function(model) {
      if ((this.model.groupsHash[model.group()] === true) && (this._checkMatch(model, this.model))) {
        return this.rendered.done(_.bind(_.wrap(model, this._addAvailability), this));
      }
    },
    initialize: function() {
      this.model.setDeltaHours();
      this.rendered = new $.Deferred();
      this.on('rendered', this._resolveDef(this.rendered));
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
