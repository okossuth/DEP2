define(['models/period/Block', 'ovivo'], function(Block) {
  return Block.extend({
    idAttribute: 'cid',
    _gettersNames: ['date', 'workingHour', 'code', 'group', ['start_time', 'workingHour'], ['end_time', 'workingHour'], ['skills', 'workingHour'], ['groups', 'workingHour'], ['pk', 'workingHour'], ['startValue', 'workingHour'], ['endValue', 'workingHour'], ['user', 'workingHour']],
    initialize: function() {
      var _day,
        _this = this;
      this.proxyCall('initialize', arguments);
      this.groupsHash = this.workingHour().groupsHash;
      ovivo.desktop.resources.users.def.done(function() {
        return _this.skillsHash = _this.workingHour().skillsHash;
      });
      _day = this.date().getDay() - 1;
      if (_day === -1) {
        _day = 6;
      }
      this.day = _day;
      return true;
    }
  });
});
