define(['models/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    typeName: 'event',
    _gettersNames: ['pk', 'comment', 'users', 'start_time', 'skill', 'pub_date', 'group', 'creator_name', 'num_comments', 'response_deadline', 'assignees', 'end_time', 'type', 'start_date'],
    date: function() {
      var date, month, year, _ref, _ref1;
      if (this.key != null) {
        return this.key;
      } else {
        _ref = this.start_date().split('-'), year = _ref[0], month = _ref[1], date = _ref[2];
        _ref1 = [parseInt(year), parseInt(month) - 1, parseInt(date)], year = _ref1[0], month = _ref1[1], date = _ref1[2];
        return this.key = "" + year + "-" + month + "-" + date;
      }
    },
    initialize: function(attrs, options) {
      var _day;
      this.dateObj = new Date(Date.parse(attrs.start_date));
      _day = this.dateObj.getDay() - 1;
      if (_day === -1) {
        _day = 6;
      }
      this.day = _day;
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
