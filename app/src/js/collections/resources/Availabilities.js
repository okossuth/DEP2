define(['models/resources/Availability', '_common/ResourceManagerBase', '_features/trailZero', 'ovivo'], function(Model, ResourceManagerBase, trailZero) {
  return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, {
    model: Model,
    fullResponse: true,
    _url: function() {
      return "" + ovivo.config.API_URL_PREFIX + "availability/" + this._start + "/" + this._end + "/?group=" + this._group;
    },
    processResponse: (function() {
      var _processUser;
      _processUser = function(group, arr, user) {
        var _this = this;
        return _.each(arr, function(obj) {
          obj.user = user;
          obj.group = group;
          return _this.add(obj);
        });
      };
      return function(group, data) {
        return _.each(data, _.bind(_.wrap(group, _processUser), this));
      };
    })(),
    _fetchGroup: function(start, end, group) {
      var _request,
        _this = this;
      this._start = "" + (start.getFullYear()) + "-" + (trailZero(start.getMonth() + 1)) + "-" + (trailZero(start.getDate()));
      this._end = "" + (end.getFullYear()) + "-" + (trailZero(end.getMonth() + 1)) + "-" + (trailZero(end.getDate()));
      this._group = group;
      _request = $.ajax({
        dataType: 'json',
        type: 'GET',
        url: this._url()
      });
      return _request.done(function(data) {
        return _this.processResponse(group, data);
      });
    },
    _fetch: function(start, end) {},
    fetchMonth: function(month, year) {
      var _end, _key, _start;
      _key = "" + year + "-" + month;
      if (this._monthsCache[_key] == null) {
        this._monthsCache[_key] = true;
        _start = new Date(year, month, 1);
        _end = new Date(_start);
        _end.moveToLastDayOfMonth();
        return this._fetch(_start, _end);
      }
    },
    fetchWeek: function(number, year) {
      var _date;
      _date = new Date(year, 0, 1);
      _date.setWeek(number);
      return this.fetchMonth(_date.getMonth(), year);
    },
    initFetch: function() {
      var _def;
      _def = new $.Deferred();
      _def.resolve();
      return _def;
    },
    initialize: function() {
      this._monthsCache = {};
      return true;
    }
  }));
});
