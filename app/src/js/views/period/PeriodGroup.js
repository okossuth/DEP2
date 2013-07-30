define(['_features/objsMerger', 'views/resources/ResourceBase', 'views/period/GroupSectionBase', 'views/period/PeriodGroupEmployees', 'ovivo'], function(objsMerger, ResourceBase, GroupSectionBase, PeriodGroupEmployees) {
  return ResourceBase.extend(_.extend({}, GroupSectionBase, objsMerger.funcMerge(PeriodGroupEmployees, {
    common: {},
    MIN_BLOCK_HEIGHT: 148,
    tagName: 'li',
    className: 'period-group',
    template: Handlebars.templates['periodGroup'],
    groupTemplate: Handlebars.templates['periodGroup_group'],
    preventChangeRender: true,
    events: {
      'click': 'processClick'
    },
    processClick: function() {},
    clearScroll: function() {
      this._clearHeader();
      this._clearFolding();
      return true;
    },
    processScroll: function(obj, val) {
      var _val;
      _val = Math.min(obj.height - this.MIN_BLOCK_HEIGHT, val);
      this._animateHeader(_val, val);
      this._animateFolding(_val, val);
      return true;
    },
    addBlock: function(block) {},
    _renderGroup: function() {
      return this.$('.group-name').html(ovivo.desktop.resources.groups.get(this.pk()).chainName());
    },
    postRender: function() {
      var _this = this;
      ovivo.desktop.resources.groups.def.done(_.bind(this._renderGroup, this));
      this.timeGroups = this.$('.time-groups');
      this.header = this.$('h1.title')[0];
      this.addTimeGroups(this.model.timeGroups.map(function(t) {
        return t;
      }));
      this.model.timeGroups.on('add', this.addTimeGroups, this);
      return this.renderDef.resolve();
    },
    addTimeGroups: function(timeGroups) {
      return this._addViewSorted(this.timeGroups, this.model.timeGroups, timeGroups);
    },
    changeVisible: function() {
      return this.$el["" + (this.visible() === true ? 'remove' : 'add') + "Class"]('hide');
    },
    initialize: function() {
      this.model.on('change:visible', this.changeVisible, this);
      this.renderDef = new $.Deferred();
      this.proxyCall('initialize', arguments);
      return true;
    }
  })));
});
