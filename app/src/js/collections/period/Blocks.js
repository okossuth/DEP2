define(['ovivo'], function() {
  return Backbone.Collection.extend({
    _initialize: function() {
      this.initCacheProcessors();
      return true;
    }
  });
});
