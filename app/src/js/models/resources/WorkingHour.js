define(['models/resources/ResourceBase', '_features/RuleCompiler', 'ovivo'], function(ResourceBase, RuleCompiler) {
  return ResourceBase.extend({
    typeName: 'workingHour',
    _gettersNames: ['weekdays', 'available', 'repeat', 'exclusions', 'groups', 'start_date', 'end_date', 'start_time', 'end_time', 'user', 'skills', 'pk', 'startValue', 'endValue'],
    groups: function() {
      var _groups;
      if ((_groups = this.get('groups')) != null) {
        return _groups;
      } else {
        return [];
      }
    },
    skills: function() {
      var _ref;
      return (_ref = ovivo.desktop.resources.users.get(this.user())) != null ? _ref.skills() : void 0;
    },
    updateWeekdaysHash: function() {
      var _ref;
      return this.weekdaysHash = _.reduce((_ref = this.weekdays()) != null ? _ref.split(',') : void 0, (function(memo, elem) {
        memo[parseInt(elem) - 1] = true;
        return memo;
      }), {});
    },
    updateGroupsHash: function() {
      return this.groupsHash = _.reduce(this.groups(), (function(memo, elem) {
        memo[parseInt(elem)] = true;
        return memo;
      }), {});
    },
    updateSkillsHash: function() {
      return this.skillsHash = _.reduce(this.skills(), (function(memo, elem) {
        memo[parseInt(elem)] = true;
        return memo;
      }), {});
    },
    _getTimeValue: function(str) {
      var _hours, _minutes, _ref, _ref1;
      _ref = str.split(':'), _hours = _ref[0], _minutes = _ref[1];
      _ref1 = [parseInt(_hours), parseInt(_minutes)], _hours = _ref1[0], _minutes = _ref1[1];
      return _hours * 60 + _minutes;
    },
    _blockCodeGenerator: function(obj) {
      var _date;
      _date = obj.date;
      return "" + (_date.getFullYear()) + "-" + (_date.getMonth()) + "-" + (_date.getDate()) + "." + (obj.workingHour.pk());
    },
    compile: function(start, end) {
      var _arr;
      start = new Date(Date.parse(start));
      end = new Date(Date.parse(end));
      return _arr = RuleCompiler.compile(start, end, this.start_date(), this.end_date(), this.repeat(), this.weekdaysHash, {
        workingHour: this
      }, this._blockCodeGenerator);
    },
    initialize: function(attrs, options) {
      this.proxyCall('initialize', arguments);
      this.on('change:weekdays', this.updateWeekdaysHash, this);
      this.updateWeekdaysHash();
      this.updateGroupsHash();
      ovivo.desktop.resources.users.def.done(_.bind(this.updateSkillsHash, this));
      this._startValue = this._getTimeValue(this.start_time());
      this._endValue = this._getTimeValue(this.end_time());
      if (this.endValue < this.startValue) {
        this.endValue += 24 * 60;
      }
      this.set('startValue', this._startValue);
      this.set('endValue', this._endValue);
      return true;
    }
  });
});
