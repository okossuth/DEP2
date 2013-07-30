define(['ovivo'], function() {
  return Backbone.View.extend({
    tagName: 'li',
    className: 'month-section',
    template: Handlebars.templates['periodMonth'],
    month: function() {
      return ovivo.config.MONTHS[this.model.month()];
    },
    year: function() {
      return this.model.year();
    },
    addPeriod: function(model) {
      return this.periodsContainer.append(model.view.el);
    },
    render: function() {
      var _now;
      _now = Date.today();
      this.$el.html(this.template(this));
      if ((_now.getMonth() === this.model.month()) && (_now.getFullYear() === this.model.year())) {
        this.$el.addClass('current');
      }
      return this.periodsContainer = this.$('ul.periods');
    },
    initialize: function() {
      this.render();
      return true;
    }
  });
});
