define(['views/popups/EditPopup', '_features/trailZero', 'ovivo'], function(EditPopup, trailZero) {
  return EditPopup.extend({
    el: '.popup-template',
    fields: ['name', 'resource_needs'],
    resourceNeedsTemplate: Handlebars.templates['resourceNeeds'],
    resourceNeeds: function() {
      return ovivo.desktop.resources.resourceNeeds.map(function(model) {
        return model;
      });
    },
    resourceNeedsProcessor: function(value) {
      return _.map(value, function(resourceNeed) {
        return parseInt(resourceNeed);
      });
    },
    types: function() {
      return {
        'name': String,
        'repeat': Number,
        'resource_needs': this.resourceNeedsProcessor
      };
    },
    createNew: function() {
      this.setModel(new this.collection.model({
        name: '',
        repeat: 1,
        resource_needs: []
      }));
      return this.initCreateMode();
    },
    processResourceNeeds: function() {
      var _select;
      _select = this.$('.property-value-resource_needs');
      _select.children().remove();
      return _select.append($(this.resourceNeedsTemplate(this)).children());
    },
    initialize: function() {
      var _resourceNeedsProcessor,
        _this = this;
      this.types = this.types();
      this.collection = ovivo.desktop.resources.templates;
      this._initialize();
      _resourceNeedsProcessor = _.bind(this.processResourceNeeds, this);
      ovivo.desktop.resources.resourceNeeds.def.done(_resourceNeedsProcessor);
      ovivo.desktop.resources.resourceNeeds.def.done(function() {
        ovivo.desktop.resources.resourceNeeds.on('add', _resourceNeedsProcessor);
        ovivo.desktop.resources.resourceNeeds.on('change', _resourceNeedsProcessor);
        return ovivo.desktop.resources.resourceNeeds.on('remove', _resourceNeedsProcessor);
      });
      return true;
    }
  });
});
