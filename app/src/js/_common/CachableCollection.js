// Generated by CoffeeScript 1.6.2
define(['ovivo'], function() {
  return {
    get: function(fields) {
      return {
        _cacheAddProcessorField: function(model, field, _value) {
          var _obj;

          if (_value == null) {
            _value = model[field]();
          }
          if ((_obj = this._cache[field][_value]) == null) {
            _obj = this._cache[field][_value] = {};
          }
          return _obj[model.id] = model;
        },
        _cacheRemoveProcessorField: function(model, field, _value) {
          var _obj;

          if (_value == null) {
            _value = model[field]();
          }
          _obj = this._cache[field][_value];
          if (_obj != null) {
            return delete _obj[model.id];
          }
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
        getBy: function(field, value) {
          return _.values(this._cache[field][value]);
        },
        getKeys: function(field) {
          return _.keys(this._cache[field]);
        }
      };
    }
  };
});
