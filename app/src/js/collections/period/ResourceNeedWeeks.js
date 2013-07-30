define(['models/period/ResourceNeedWeek', 'collections/period/GroupSectionsBase', 'ovivo'], function(Model, GroupSectionsBase) {
  return Backbone.Collection.extend(_.extend({}, GroupSectionsBase, {
    model: Model,
    initialize: function() {
      return true;
    }
  }));
});
