// Generated by CoffeeScript 1.6.2
define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
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
      if (ovivo.config.TRANSFORM !== false) {
        this.header.style[ovivo.config.TRANSFORM] = '';
      } else {
        this.header.style.top = '';
      }
      this.el.style.opacity = '';
      this.$el.removeClass('folding');
      if (ovivo.config.TRANSFORM !== false) {
        this.el.style[ovivo.config.TRANSFORM] = '';
      }
      return true;
    },
    processScroll: function(obj, val) {
      var _frac, _height, _val;

      _height = obj.height - this.MIN_BLOCK_HEIGHT;
      _val = Math.min(obj.height - this.MIN_BLOCK_HEIGHT, val);
      if (ovivo.config.TRANSFORM !== false) {
        this.header.style[ovivo.config.TRANSFORM] = "translate(0, " + _val + "px)";
      } else {
        this.header.style.top = "" + _val + "px";
      }
      if (obj.last === true) {
        return;
      }
      if (_val !== val) {
        _frac = (val - _val) / this.MIN_BLOCK_HEIGHT;
        this.el.style.opacity = Math.pow(1 - _frac, 2);
        this.$el.addClass('folding');
        if (ovivo.config.TRANSFORM !== false) {
          this.el.style[ovivo.config.TRANSFORM] = "translate(0, " + (this.MIN_BLOCK_HEIGHT * _frac) + "px) scale(" + (1 - 0.05 * Math.pow(_frac, 2)) + ") rotateX(" + (60 * Math.pow(_frac, 2)) + "deg)";
        }
      } else {
        this.$el.removeClass('folding');
        this.el.style.opacity = '';
        if (ovivo.config.TRANSFORM !== false) {
          this.el.style[ovivo.config.TRANSFORM] = '';
        }
      }
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
  });
});