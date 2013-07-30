define(['collections/period/Blocks', 'models/period/PeriodBlock', '_common/CachableCollection', 'ovivo'], function(Blocks, Model, CachableCollection) {
  return Blocks.extend(_.extend({}, CachableCollection.get(['pk', 'skill', 'group', 'groups', 'date', 'code', 'dateKey']), {
    model: Model,
    initialize: function(models, options) {
      if ((options != null ? options.View : void 0) != null) {
        this.View = options.View;
      }
      this._initialize();
      return true;
    }
  }));
});
