define(['_common/ToolsBase', 'ovivo'], function(ToolsBase) {
  var _Base;
  _Base = Backbone.Model.extend(_.extend({}, ToolsBase, {
    createGetters: (function() {
      var _foreignGetter, _nativeGetter;
      _nativeGetter = function(_name) {
        return function() {
          return this.get(_name);
        };
      };
      _foreignGetter = function(_arr) {
        return function() {
          return this.get(_arr[1])[_arr[0]]();
        };
      };
      return ToolsBase.once('createGetters', function() {
        var _this = this;
        return _.each(this._gettersNames, function(arr) {
          var _getter, _name;
          _getter = (typeof arr === 'string' ? _nativeGetter : _foreignGetter)(arr);
          _name = typeof arr === 'string' ? arr : arr[0];
          if (_this.constructor.prototype[_name] == null) {
            return _this.constructor.prototype[_name] = _getter;
          }
        });
      });
    })(),
    initialize: function() {
      this.createGetters();
      if (this.View != null) {
        this.view = new this.View({
          model: this
        });
      }
      return true;
    }
  }));
  _Base.prototype._base = _Base;
  return _Base;
});
