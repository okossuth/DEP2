define(['models/period/ResourceNeedTimeGroup', 'collections/period/GroupSectionsBase', 'ovivo'], function(Model, GroupSectionsBase) {
  return Backbone.Collection.extend(_.extend({}, GroupSectionsBase, {
    model: Model,
    comparator: function(model) {
      return model.startValue();
    },
    initialize: function() {
      this.innerCollectionName = 'resourceNeedWeeks';
      return true;
    }
  }));
});
