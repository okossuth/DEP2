// Generated by CoffeeScript 1.6.2
define(['views/period/PeriodBlock', 'models/period/Block', 'ovivo'], function(View, Block) {
  return Block.extend({
    idAttribute: 'cid',
    _gettersNames: ['date', 'hours', ['start_time', 'resourceNeed'], ['end_time', 'resourceNeed'], ['skill', 'resourceNeed'], ['employee_type', 'resourceNeed'], ['num_employees', 'resourceNeed'], ['groups', 'period'], ['pk', 'period'], ['startValue', 'resourceNeed'], ['endValue', 'resourceNeed']],
    addHour: function(hour, groups) {
      var _this = this;

      return _.each(groups, function(group) {
        _this.groupsHash[group].push(hour);
        return _this.view.updateGroup(group);
      });
    },
    tryHour: function(hour, groups) {
      var _e, _e1, _s, _s1;

      _s = hour.startValue();
      _e = hour.endValue();
      _s1 = this.startValue();
      _e1 = this.endValue();
      if ((_s <= _s1) && (_e >= _e1)) {
        return this.addHour(hour, groups);
      }
    },
    initGroups: function() {
      var _this = this;

      this.groupsHash = {};
      return _.each(this.get('period').groups(), function(group) {
        return _this.groupsHash[group] = [];
      });
    },
    initialize: function() {
      this.View = View;
      this.initGroups();
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});