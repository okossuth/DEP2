// Generated by CoffeeScript 1.6.2
define(['views/pages/PageBase', '_common/EmptyListDetector', 'ovivo'], function(PageBase, EmptyListDetector) {
  return PageBase.extend(_.extend({}, EmptyListDetector, {
    el: '.page.page-settings .resource-need-view',
    name: 'resourceNeed',
    events: {
      'click .button-add-new': 'addNew'
    },
    addNew: function() {
      ovivo.desktop.popups.editPopupResourceNeed.show();
      ovivo.desktop.popups.editPopupResourceNeed.create();
      return true;
    },
    addResourceNeed: function(model) {
      var _view;

      _view = model.getEditView('settingsView');
      return this.resourceNeeds.prepend(_view.el);
    },
    initialize: function() {
      this.resourceNeeds = this.$('.resource-needs');
      this.initEmptyListDetector(ovivo.desktop.resources.resourceNeeds);
      ovivo.desktop.resources.resourceNeeds.on('add', this.addResourceNeed, this);
      return true;
    }
  }));
});
