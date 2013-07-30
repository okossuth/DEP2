define(['views/popups/Popup', 'ovivo'], function(Popup) {
  return Popup.extend({
    el: '.popup-period-block',
    events: _.extend({}, Popup.prototype.events, {}),
    template: Handlebars.templates['periodBlock'],
    render: function(obj) {
      return this.$('.groups').html(this.template(obj));
    },
    initialize: function() {
      this._initialize();
      return true;
    }
  });
});
