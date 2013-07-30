define(['views/pages/PageBase', '_common/EmptyListDetector', 'ovivo'], function(PageBase, EmptyListDetector) {
  return PageBase.extend(_.extend({}, EmptyListDetector, {
    el: '.page.page-resources .content-templates',
    name: 'templates',
    events: {
      'click .button-add-template': 'createTemplate'
    },
    highlight: function(el) {
      this.$el.addClass('selected');
      if (el != null) {
        $(el).addClass('selected');
      }
      return true;
    },
    removeHighlight: function() {
      this.$el.removeClass('selected');
      return this.$('.selected').removeClass('selected');
    },
    createTemplate: function() {
      ovivo.desktop.pages.resources.view.showSubView('template');
      ovivo.desktop.pages.resources.view.subViews.template.create();
      this.removeHighlight();
      this.highlight();
      return this.$('.button-add-template').addClass('selected');
    },
    addTemplate: function(model) {
      return this.$('ul.templates').append(model.view.el);
    },
    initialize: function() {
      this.initEmptyListDetector(ovivo.desktop.resources.templates);
      ovivo.desktop.resources.templates.on('add', this.addTemplate, this);
      return true;
    }
  }));
});
