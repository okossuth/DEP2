// Generated by CoffeeScript 1.6.2
define(['collections/period/Blocks', 'models/period/PeriodBlock', '_common/CachableCollection', 'ovivo'], function(Blocks, Model, CachableCollection) {
  return Blocks.extend(_.extend({}, CachableCollection.get(['skill', 'groups', 'date']), {
    model: Model,
    initialize: function() {
      this._initialize();
      return true;
    }
  }));
});
