define(['_common/CachableCollection', 'models/resources/Event', 'ovivo'], function(CachableCollection, Event) {
  return Backbone.Collection.extend(_.extend({}, CachableCollection.get(['date', 'skill', 'group']), {
    model: Event,
    url: function() {
      return "" + ovivo.config.API_URL_PREFIX + "events/";
    },
    comparator: function(event) {
      return new Date(event.start_date());
    },
    _getQueryString: function(data) {
      return _.reduce(data, (function(memo, value, key) {
        return "" + memo + "&" + key + "=" + value;
      }), '');
    },
    _getTypeQueryString: function(data) {
      return _.reduce(data, (function(memo, value, key) {
        if (value === true) {
          return "" + memo + "&type=" + key;
        } else {
          return memo;
        }
      }), '');
    },
    _fetch: function(data) {
      var _callObj, _def, _queryStringFinal,
        _this = this;
      _queryStringFinal = (this._getQueryString(data) + this._getTypeQueryString(this.type)).slice(1);
      if (this.def.state() === 'resolved') {
        this.def = new $.Deferred();
      }
      _def = new $.Deferred();
      _callObj = {
        update: true,
        remove: false,
        data: _queryStringFinal,
        success: function(col, response) {
          _this.def.resolve(response);
          _def.resolve(response);
          return true;
        },
        error: function() {
          _this.def.reject();
          _def.reject();
          return true;
        }
      };
      if (this._ready === true) {
        this.fetch(_callObj);
      } else {
        this._calls.push(_callObj);
      }
      return this.def;
    },
    fetchMonth: function(month, year) {
      var _def,
        _this = this;
      _def = new $.Deferred();
      if (typeof this.monthCache["" + year + "-" + month] !== 'undefined') {
        _def.resolve();
      } else {
        this.monthCache["" + year + "-" + month] = true;
        (this._fetch({
          month: month + 1,
          year: year
        })).then(function() {
          _def.resolve();
          return true;
        });
      }
      return _def;
    },
    fetchWeek: function(number, year, date) {
      return this.fetchMonth(date.getMonth(), year);
    },
    clear: function() {
      this.monthCache = {};
      this.dateCache = {};
      this.reset();
      return true;
    },
    initFetch: function() {
      var _defs,
        _this = this;
      this._ready = true;
      _defs = _.map(this._calls, function(callObj) {
        return _this.fetch(callObj);
      });
      this._calls = [];
      return $.when.apply($, _defs);
    },
    initialize: function(models, options) {
      this._ready = false;
      this._calls = [];
      this.initCacheProcessors();
      this.type = {
        'open': true,
        'open-responses': true,
        'closed': true
      };
      _.extend(this, options);
      this.def = new $.Deferred();
      this.monthCache = {};
      return true;
    }
  }));
});
