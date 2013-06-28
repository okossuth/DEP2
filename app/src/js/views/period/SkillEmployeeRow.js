// Generated by CoffeeScript 1.6.2
define(['views/resources/ResourceBase', 'views/period/GroupSectionBase', 'views/period/EventEmployee', 'views/period/WorkingHourEmployee', 'ovivo'], function(ResourceBase, GroupSectionBase, EventEmployee, WorkingHourEmployee) {
  return ResourceBase.extend(_.extend({}, GroupSectionBase, {
    common: {},
    MIN_BLOCK_HEIGHT: 100,
    tagName: 'div',
    className: 'table-container content',
    template: Handlebars.templates['employeeRowSkill'],
    groupTemplate: Handlebars.templates['employeeRowSkill_group'],
    preventChangeRender: true,
    events: {
      'click': 'processClick'
    },
    processClick: function() {},
    clearScroll: function() {},
    processScroll: function(obj, val) {},
    postRender: function() {
      this.eventContainers = this.$('td.day-block ul.activities');
      return this.renderDef.resolve();
    },
    addEvent: function(event, obj) {
      var _view,
        _this = this;

      _view = new EventEmployee({
        model: event
      }, obj);
      this.renderDef.done(function() {
        return $(_this.eventContainers.get(event.day)).append(_view.el);
      });
      return _view;
    },
    addHoursBlock: function(block) {
      var _view,
        _this = this;

      _view = new WorkingHourEmployee({
        model: block.workingHour()
      }, {
        block: block
      });
      return this.renderDef.done(function() {
        return $(_this.eventContainers.get(block.day)).append(_view.el);
      });
    },
    initialize: function() {
      this.renderDef = new $.Deferred();
      this.proxyCall('initialize', arguments);
      return true;
    }
  }));
});
