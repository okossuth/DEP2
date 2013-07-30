define([], function() {
  var _createAddHanler, _createRemoveHanler;
  _createAddHanler = function(_empty, collection) {
    return function() {
      return _empty.hide();
    };
  };
  _createRemoveHanler = function(_empty, collection) {
    return function() {
      if (collection.length === 0) {
        return _empty.show();
      }
    };
  };
  return {
    initEmptyListDetector: function(collection) {
      var _empty;
      _empty = this.$('ul li.empty');
      collection.on('add', _createAddHanler(_empty, collection), this);
      return collection.on('remove', _createRemoveHanler(_empty, collection), this);
    }
  };
});
