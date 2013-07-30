define(['collections/period/Blocks', 'models/period/HoursBlock', '_common/CachableCollection', 'ovivo'], function(Blocks, Model, CachableCollection) {
  return Blocks.extend(_.extend({}, CachableCollection.get(['pk', 'skills', 'user', 'code', 'group', 'groups', 'date']), {
    model: Model,
    initialize: function() {
      this._initialize();
      return true;
    }
  }));
});
