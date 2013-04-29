// Generated by CoffeeScript 1.6.2
define(['views/pages/PageBase', 'ovivo'], function(PageBase) {
  return PageBase.extend({
    el: '.page.page-settings .availability-view',
    name: 'availability',
    events: {},
    addWorkingHour: function(workingHour) {
      return this.workingHours.append(workingHour.editView.el);
    },
    initialize: function() {
      this.workingHours = this.$('.working-hours');
      ovivo.desktop.resources.workingHours.on('add', this.addWorkingHour, this);
      return true;
    }
  });
});
