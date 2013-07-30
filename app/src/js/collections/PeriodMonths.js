define(['models/PeriodMonth', 'ovivo'], function(Model) {
  return Backbone.Collection.extend({
    model: Model,
    comparator: function(model) {
      return new Date(model.year(), model.month(), 1);
    },
    addMonth: function(obj) {
      var _model;
      _model = new Model(obj);
      this.add(_model);
      return _model;
    },
    initialize: function() {
      return true;
    }
  });
});
