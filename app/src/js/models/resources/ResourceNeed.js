define(['models/resources/ResourceBase', 'views/resources/ResourceNeed', 'views/resources/ResourceNeedEdit', '_features/validators', 'ovivo'], function(ResourceBase, View, EditView, validators) {
  return ResourceBase.extend({
    typeName: 'resourceNeed',
    _gettersNames: ['weekdays', 'repeat', 'start_time', 'end_time', 'pk', 'deltaHours', 'num_employees', 'employee_type', 'skill', 'primary_department', 'checked', 'templates', 'startValue', 'endValue'],
    _getTrueHash: function(hash) {
      return _.compact(_.map(_.pairs(hash), function(arr) {
        if (arr[1] === true) {
          return parseInt(arr[0]) + 1;
        } else {
          return void 0;
        }
      }));
    },
    processWeek: function(num, value) {
      var _weeks;
      value = !value;
      this.weekdaysHash[num] = value;
      _weeks = this._getTrueHash(this.weekdaysHash);
      this.set('weekdays', _weeks.length > 0 ? _weeks.join(',') : null);
      return true;
    },
    validate: function(attrs) {
      if ((attrs.available != null) && (attrs.start_time != null) && (attrs.end_time != null) && (attrs.weekdays != null)) {
        return void 0;
      } else {
        return gettext('Params are missing');
      }
    },
    validate: function(attrs) {
      var _this = this;
      return _.reduce([
        {
          name: 'start_time',
          value: attrs.start_time,
          validator: 'time'
        }, {
          name: 'end_time',
          value: attrs.end_time,
          validator: 'time'
        }, {
          name: 'num_employees',
          value: attrs.num_employees,
          validator: 'number'
        }
      ], (function(memo, obj) {
        if (typeof memo !== 'undefined') {
          return memo;
        } else {
          return validators[obj.validator](obj.name, obj.value);
        }
      }), void 0);
    },
    processChange: function(model, obj) {},
    processModelChange: function() {},
    toJSON: function() {
      var _json;
      _json = Backbone.Model.prototype.toJSON.call(this);
      if ((_json.groups instanceof Array) && (_json.groups.length === 0)) {
        this.set('groups', null, {
          silent: true
        });
        _json.groups = null;
      }
      delete _json.deltaHours;
      delete _json.checked;
      delete _json.templates;
      delete _json.startValue;
      delete _json.endValue;
      return _json;
    },
    changePrimaryDepartment: function(model) {
      var _templates;
      _templates = this.templates();
      if (typeof _templates === 'object') {
        return _.each(_.keys(_templates), function(id) {
          return ovivo.desktop.resources.templates.get(id).removeResourceNeed(model.id);
        });
      }
    },
    setDeltaHours: (function() {
      var _getMinutes;
      _getMinutes = function(str) {
        var hours, minutes, _ref, _ref1;
        _ref = _.compact(ovivo.config.VALIDATION_REGEXP_TIME.exec(str)).slice(-2), hours = _ref[0], minutes = _ref[1];
        _ref1 = [parseInt(hours), parseInt(minutes)], hours = _ref1[0], minutes = _ref1[1];
        return hours * 60 + minutes;
      };
      return function() {
        var _delta, _end, _start;
        _end = _getMinutes(this.end_time());
        _start = _getMinutes(this.start_time());
        if (_start <= _end) {
          _delta = (_end - _start) / 60;
        } else {
          _delta = (_end - _start) / 60 + 24;
        }
        return this.set('deltaHours', Math.round(_delta));
      };
    })(),
    updateWeekdaysHash: function() {
      var _ref;
      return this.weekdaysHash = _.reduce((_ref = this.weekdays()) != null ? _ref.split(',') : void 0, (function(memo, elem) {
        memo[parseInt(elem) - 1] = true;
        return memo;
      }), {});
    },
    _getTimeValue: function(str) {
      var _hours, _minutes, _ref, _ref1;
      _ref = str.split(':'), _hours = _ref[0], _minutes = _ref[1];
      _ref1 = [parseInt(_hours), parseInt(_minutes)], _hours = _ref1[0], _minutes = _ref1[1];
      return _hours * 60 + _minutes;
    },
    getEditView: function(name) {
      return this[name] = new EditView({
        model: this
      });
    },
    addTemplate: function(id) {
      var _obj;
      _obj = _.extend({}, this.templates());
      _obj[id] = true;
      return this.set('templates', _obj);
    },
    removeTemplate: function(id) {
      var _obj;
      _obj = _.extend({}, this.templates());
      delete _obj[id];
      return this.set('templates', _obj);
    },
    updateTimeValues: function() {
      this._startValue = this._getTimeValue(this.start_time());
      this._endValue = this._getTimeValue(this.end_time());
      if (this._endValue < this._startValue) {
        this._endValue += 24 * 60;
      }
      this.set('startValue', this._startValue);
      return this.set('endValue', this._endValue);
    },
    updateFrame: function() {
      var _templates;
      _templates = this.templates();
      if (typeof _templates === 'object') {
        _.each(_.unique(_.reduce(_.keys(_templates), (function(memo, id) {
          var _periods;
          _periods = ovivo.desktop.resources.templates.get(id).periods();
          return memo.concat(typeof _periods === 'object' ? _.keys(_periods) : []);
        }), [])), function(id) {
          var _period;
          _period = ovivo.desktop.resources.periods.get(id);
          return ovivo.desktop.resources.periods.trigger('updateFrames', _period);
        });
      }
      return true;
    },
    initialize: function(attrs, options) {
      this.View = View;
      this.proxyCall('initialize', arguments);
      this.on('change', this.processChange, this);
      this.on('change:weekdays', this.updateWeekdaysHash, this);
      this.on('change:primary_department', this.changePrimaryDepartment, this);
      this.updateWeekdaysHash();
      this.on('change:start_time', this.updateTimeValues, this);
      this.on('change:end_time', this.updateTimeValues, this);
      this.on('change:start_time', this.updateFrame, this);
      this.on('change:end_time', this.updateFrame, this);
      this.updateTimeValues();
      return true;
    }
  });
});
