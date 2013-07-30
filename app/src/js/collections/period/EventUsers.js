define(['_common/CachableCollection', 'models/period/EventUser', 'ovivo'], function(CachableCollection, Model) {
  return Backbone.Collection.extend(_.extend({}, CachableCollection.get(['pk', 'type']), {
    model: Model,
    comparator: (function() {
      var _order;
      _order = {
        'closed': 1,
        'open-responses': 2,
        'open': 3
      };
      return function(model) {
        return "" + _order[model.type()] + "-" + (model.name());
      };
    })(),
    initialize: function() {
      this.initCacheProcessors();
      return true;
    }
  }));
});
