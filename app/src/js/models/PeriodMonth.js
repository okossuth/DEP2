define(['views/PeriodMonth', 'ovivo'], function(View) {
  return Backbone.Model.extend({
    idAttribute: 'key',
    month: function() {
      return this.get('month');
    },
    year: function() {
      return this.get('year');
    },
    addPeriod: function(model) {
      return this.view.addPeriod(model);
    },
    initialize: function() {
      this.set('key', "" + (this.year()) + "-" + (this.month()));
      this.view = new View({
        model: this
      });
      return true;
    }
  });
});
