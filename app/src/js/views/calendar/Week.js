// Generated by CoffeeScript 1.6.2
define(['views/calendar/DaysCollector', 'views/resources/ResourceBase', 'collections/period/ResourceNeedWeeks', '_features/binarySearch', 'ovivo'], function(DaysCollector, ResourceBase, ResourceNeedWeeks, binarySearch) {
  return ResourceBase.extend(_.extend({}, DaysCollector, {
    common: {},
    template: Handlebars.templates['calendarWeek'],
    groupTemplate: Handlebars.templates['calendarWeek_group'],
    events: {},
    processScroll: function(val, height) {
      var _res;

      if (this._scrollDataFlag === false) {
        this._calcScrollData();
        if (this._prev != null) {
          this._prev.model.clearScroll();
        }
        this._prev = null;
      }
      _res = binarySearch(this._RNScrollData, val, this._RNComparator);
      if (_res !== null) {
        _res.model.processScroll(_res, val - _res.start);
      }
      if (_res === this._prev) {
        return;
      }
      if (this._prev !== null) {
        this._prev.model.clearScroll();
      }
      this._prev = _res;
      return true;
    },
    _RNComparator: function(obj, val) {
      if (obj.start >= val) {
        return -1;
      }
      if (obj.end < val) {
        return 1;
      }
      return 0;
    },
    _calcScrollData: function() {
      this._offsetHeight = this.el.offsetHeight;
      this._RNScrollData = this.resourceNeedWeeks.getScrollData();
      this._scrollDataFlag = true;
      return true;
    },
    days: function() {
      return this.model.days;
    },
    addBlocks: function(arr) {
      var _this = this;

      return _.each(arr, function(block) {
        return _this.addBlock(block);
      });
    },
    removeBlocks: function(arr) {
      var _this = this;

      return _.each(arr, function(block) {
        return _this.removeBlock(block);
      });
    },
    addBlock: function(block) {
      var _rn;

      _rn = this.resourceNeedWeeks.getBy('pk', block.resourceNeed().pk())[0];
      if (_rn == null) {
        _rn = this.resourceNeedWeeks.addModel({
          resourceNeed: block.resourceNeed()
        });
      }
      return _rn.addBlock(block);
    },
    removeBlock: function(block) {
      var _rn;

      _rn = this.resourceNeedWeeks.getBy('pk', block.resourceNeed().pk())[0];
      if (_rn != null) {
        return _rn.removeBlock(block);
      }
    },
    _initFrame: function() {
      this.addBlocks(this.model.frame.periodBlocks.map(function(b) {
        return b;
      }));
      this.model.frame.periodBlocks.on('add', this.addBlock, this);
      this.model.frame.periodBlocks.on('remove', this.removeBlock, this);
      this.container = this.$('.resource-needs-rows');
      return this.frameInitDef.resolve();
    },
    addResourceNeed: function(model) {
      var _this = this;

      return this.frameInitDef.done(function() {
        return _this.container.append(model.view.$el);
      });
    },
    _updateScroll: function() {
      return this._scrollDataFlag = false;
    },
    initialize: function() {
      this.frameInitDef = new $.Deferred();
      this._scrollDataFlag = false;
      this.resourceNeedWeeks = new ResourceNeedWeeks();
      this.resourceNeedWeeks.week = this;
      this.resourceNeedWeeks.on('add', this.addResourceNeed, this);
      this.resourceNeedWeeks.on('add', this._updateScroll, this);
      this.resourceNeedWeeks.on('remove', this._updateScroll, this);
      this.model.on('rendered', this._initFrame, this);
      this.proxyCall('initialize', arguments);
      this.model.frame.periodBlocks.on('add', this._updateScroll, this);
      this.model.frame.periodBlocks.on('remove', this._updateScroll, this);
      this.model.frame.periodBlocks.on('updateScroll', this._updateScroll, this);
      return true;
    }
  }));
});
