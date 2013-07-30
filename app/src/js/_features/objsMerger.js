define(['ovivo'], function() {
  return {
    funcMerge: function() {
      var _hash, _objs, _res;
      _objs = Array.prototype.slice.call(arguments, 0);
      _hash = {};
      _.each(_objs, function(obj) {
        return _.each(_.filter(_.keys(obj), function(key) {
          return typeof obj[key] === 'function';
        }), function(key) {
          var _arr;
          if ((_arr = _hash[key]) === void 0) {
            _arr = _hash[key] = [];
          }
          _arr.push(obj[key]);
          return delete obj[key];
        });
      });
      _res = _.extend.apply(_, [{}].concat(_objs));
      _.each(_hash, function(arr, key) {
        if (arr.length === 1) {
          _res[key] = arr[0];
          return;
        }
        return _res[key] = function() {
          var _args,
            _this = this;
          _args = arguments;
          return _.map(arr, function(func) {
            return func.apply(_this, _args);
          })[0];
        };
      });
      return _res;
    }
  };
});
