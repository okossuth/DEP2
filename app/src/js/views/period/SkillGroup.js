define(['views/resources/ResourceBase', 'views/period/GroupSectionBase', 'views/period/PeriodBlockWeekEmployees', 'ovivo'], function(ResourceBase, GroupSectionBase, PeriodBlockView) {
  return ResourceBase.extend(_.extend({}, GroupSectionBase, {
    common: {},
    MIN_BLOCK_HEIGHT: 100,
    tagName: 'li',
    className: 'skill-group',
    template: Handlebars.templates['skillGroup'],
    groupTemplate: Handlebars.templates['skillGroup_group'],
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
      if (obj.last === true) {
        return;
      }
      return this._animateFolding(_val, val);
    },
    addBlock: function(block) {
      var _this = this;
      return this.renderDef.done(function() {
        var _view;
        _view = new PeriodBlockView({
          model: block
        });
        return $(_this.headerBlocks.get(block.day)).append(_view.el);
      });
    },
    _renderSkill: function() {
      return this.$('.skill-name').html(ovivo.desktop.resources.skills.get(this.pk()).name());
    },
    postRender: function() {
      this.header = this.$('.table-container.header')[0];
      this.headerBlocks = this.$('.day-blocks.header td.day-block.container ul.resource-needs');
      this.employeeRows = this.$('.employee-rows');
      ovivo.desktop.resources.skills.def.done(_.bind(this._renderSkill, this));
      return this.renderDef.resolve();
    },
    _renderEmployees: function() {
      var _this = this;
      this.addEmployeeRows(this.model.skillEmployeeRows.map(function(t) {
        return t;
      }));
      return this.model.skillEmployeeRows.on('add', this.addEmployeeRows, this);
    },
    addEmployeeRows: function(employeeRows) {
      return this._addViewSorted(this.employeeRows, this.model.skillEmployeeRows, employeeRows);
    },
    initialize: function() {
      this.renderDef = new $.Deferred();
      $.when(this.model.employeesDef, this.renderDef).done(_.bind(this._renderEmployees, this));
      this.proxyCall('initialize', arguments);
      return true;
    }
  }));
});
