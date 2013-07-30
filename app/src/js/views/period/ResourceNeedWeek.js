define(['views/resources/ResourceBase', 'views/period/GroupSectionBase', 'ovivo'], function(ResourceBase, GroupSectionBase) {
  return ResourceBase.extend(_.extend({}, GroupSectionBase, {
    common: {},
    MIN_BLOCK_HEIGHT: 100,
    tagName: 'li',
    className: 'resource-need-row',
    template: Handlebars.templates['resourceNeedWeek'],
    groupTemplate: Handlebars.templates['resourceNeedWeek_group'],
    preventChangeRender: true,
    events: {
      'click .time-range': 'processClick'
    },
    processClick: function() {
      ovivo.desktop.popups.editPopupResourceNeed.show();
      return ovivo.desktop.popups.editPopupResourceNeed.edit(this.model.resourceNeed());
    },
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
      this._animateFolding(_val, val);
      return true;
    },
    addBlock: function(block) {
      var _this = this;
      return $.when(block.view.renderDef, this.renderDef).done(function() {
        $(_this.headers.get(block.day)).append(block.view.header);
        $(_this.footers.get(block.day)).append(block.view.footer);
        return $(_this.contents.get(block.day)).append(block.view.content);
      });
    },
    postRender: function() {
      this.header = this.$('.day-blocks.header')[0];
      this.headers = this.$('.day-blocks.header td.day-block');
      this.contents = this.$('.day-blocks.content td.day-block');
      this.footers = this.$('.day-blocks.footer td.day-block');
      return this.renderDef.resolve();
    },
    startTimeChange: function() {
      return this.$('.start-time-value').html(this.start_time());
    },
    endTimeChange: function() {
      return this.$('.end-time-value').html(this.end_time());
    },
    initialize: function() {
      this.renderDef = new $.Deferred();
      this.proxyCall('initialize', arguments);
      this.model.resourceNeed().on('change:start_time', this.startTimeChange, this);
      this.model.resourceNeed().on('change:end_time', this.endTimeChange, this);
      return true;
    }
  }));
});
