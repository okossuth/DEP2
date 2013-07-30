define(['models/period/SkillEmployeeActivities', 'ovivo'], function(Model) {
  return Backbone.Collection.extend({
    model: Model,
    addModel: function(obj) {
      var _model;
      _model = new this.model(obj);
      this.add(_model);
      return _model;
    },
    initialize: function() {
      return true;
    }
  });
});
