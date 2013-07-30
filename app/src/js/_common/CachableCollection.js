define(['ovivo'], function() {
  return {
    get: function(fields) {
      return {
        _cacheAddProcessorField: function(model, field, _value) {
          var _this = this;
          if (_value == null) {
            _value = model[field]();
          }
          if (typeof _value === void 0) {
            return;
          }
          if ((_value instanceof Array) !== true) {
            _value = [_value];
          }
          return _.each(_value, function(value) {
            var _obj;
            if (value == null) {
              return;
            }
            if ((_obj = _this._cache[field][value.valueOf()]) == null) {
              _obj = _this._cache[field][value.valueOf()] = {};
            }
            return _obj[model.cid] = model;
          });
        },
        _cacheRemoveProcessorField: function(model, field, _value) {
          var _this = this;
          if (_value == null) {
            _value = model[field]();
          }
          if (typeof _value === void 0) {
            return;
          }
          if ((_value instanceof Array) !== true) {
            _value = [_value];
          }
          return _.each(_value, function(value) {
            var _obj;
            _obj = _this._cache[field][value.valueOf()];
            if (_obj != null) {
              return delete _obj[model.cid];
            }
          });
        },
        _cacheAddProcessor: function(model) {
          var _this = this;
          return _.each(fields, function(field) {
            return _this._cacheAddProcessorField(model, field);
          });
        },
        _cacheRemoveProcessor: function(model) {
          var _this = this;
          return _.each(fields, function(field) {
            return _this._cacheRemoveProcessorField(model, field);
          });
        },
        _cacheChangeProcessor: function(field, model) {
          this._cacheRemoveProcessorField(model, field, model.previous(field));
          return this._cacheAddProcessorField(model, field);
        },
        recalculateCache: function(fields) {
          var _this = this;
          return _.each(fields, function(field) {
            _this._cache[field] = {};
            return _this.each(function(model) {
              return _this._cacheAddProcessorField(model, field);
            });
          });
        },
        initCacheProcessors: function() {
          var _this = this;
          this._cache = {};
          _.each(fields, function(field) {
            return _this._cache[field] = {};
          });
          this.on('add', this._cacheAddProcessor, this);
          this.on('remove', this._cacheRemoveProcessor, this);
          return _.each(fields, function(field) {
            return _this.on("change:" + field, _.wrap(field, _this._cacheChangeProcessor), _this);
          });
        },
        _getBySingle: function(field, values) {
          var _this = this;
          if ((values instanceof Array) !== true) {
            values = [values];
          }
          return _.reduce(values, (function(memo, value) {
            return memo.concat(_.values(_this._cache[field][value.valueOf()]));
          }), []);
        },
        _getByGroup: function(request) {
          var _this = this;
          return _.intersection.apply(_, _.map(_.keys(request), function(field) {
            return _this._getBySingle(field, request[field]);
          }));
        },
        getBy: function() {
          if (arguments.length === 1) {
            return this._getByGroup.apply(this, arguments);
          } else {
            return this._getBySingle.apply(this, arguments);
          }
        },
        getKeys: function(field) {
          return _.keys(this._cache[field]);
        }
      };
    }
  };
});
