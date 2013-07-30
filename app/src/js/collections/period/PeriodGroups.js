define(['models/period/PeriodGroup', 'collections/period/GroupSectionsBase', '_common/CachableCollection', 'ovivo'], function(Model, GroupSectionsBase, CachableCollection) {
  return Backbone.Collection.extend(_.extend({}, GroupSectionsBase, CachableCollection.get(['pk', 'root']), {
    model: Model,
    _itemsSelector: function() {
      return this.filter(function(m) {
        return m.visible() === true;
      });
    },
    initialize: function(models, options) {
      _.extend(this, options);
      this.innerCollectionName = {
        periods: 'timeGroups',
        employees: 'skillGroups'
      };
      this.initCacheProcessors();
      return true;
    }
  }));
});
