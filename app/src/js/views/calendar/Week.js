define(['views/calendar/DaysCollector', 'views/calendar/WeekEmployees', 'views/resources/ResourceBase', 'collections/period/PeriodGroups', 'collections/period/GroupFilters', '_common/ToolsBase', '_features/objsMerger', 'ovivo'], function(DaysCollector, WeekEmployees, ResourceBase, PeriodGroups, GroupFilters, ToolsBase, objsMerger) {
  return ResourceBase.extend(_.extend({}, DaysCollector, objsMerger.funcMerge(WeekEmployees, {
    common: {},
    template: Handlebars.templates['calendarWeek'],
    groupTemplate: Handlebars.templates['calendarWeek_group'],
    events: {},
    processScroll: function(val, height) {
      if (this._scrollDataFlag === false) {
        this._calcScrollData();
      }
      if (ovivo.config.TRANSFORM !== false) {
        this.container[0].style[ovivo.config.TRANSFORM] = "translate(0, " + (-val) + "px)";
      } else {
        this.container[0].style.top = "" + (-val) + "px";
      }
      this.periodGroups.processScroll(val, height);
      return true;
    },
    _calcScrollData: function() {
      this.scrollerInner.height(this._offsetHeight = this.el.offsetHeight);
      this.periodGroups.calcScrollData();
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
      var _this = this;
      return ovivo.desktop.resources.groups.def.done(function() {
        var _periodGroup;
        _periodGroup = _this.periodGroups.get(block.group());
        if (_periodGroup == null) {
          _periodGroup = _this.periodGroups.addModel({
            pk: block.group(),
            frame: _this.model.frame
          });
        } else if (_periodGroup.visible() === true) {
          _periodGroup.addBlock(block);
        } else {
          _periodGroup.addBlockHidden(block);
        }
        return true;
      });
    },
    removeBlock: function(block) {
      var _periodGroup;
      _periodGroup = this.periodGroups.get(block.group());
      if (_periodGroup != null) {
        return _periodGroup.removeBlock(block);
      }
    },
    _initFrameMode: function() {
      return this.periodGroups.mode = this.model.frame.mode();
    },
    _initFrame: function() {
      this.addBlocks(this.model.frame.periodBlocks.map(function(b) {
        return b;
      }));
      this.model.frame.periodBlocks.on('add', this.addBlock, this);
      this.model.frame.periodBlocks.on('remove', this.removeBlock, this);
      this.container = this.$('.period-groups');
      return this.frameInitDef.resolve();
    },
    postRender: function() {
      this.groupsList = this.$('.groups-list');
      this.addGroupFilters(this.groupFilters.map(function(f) {
        return f;
      }));
      return this.groupFilters.on('add', this.addGroupFilters, this);
    },
    addPeriodGroup: function(model) {
      var _this = this;
      return this.frameInitDef.done(function() {
        return _this.container.append(model.view.$el);
      });
    },
    addGroupFilters: function(models) {
      return this._addViewSorted(this.groupsList, this.groupFilters, models);
    },
    _updateScrollThrottledRepeater: _.throttle(ToolsBase.bounceRepeater(50, 3, function() {
      this.scrollerInner.height(this._offsetHeight = this.el.offsetHeight);
      return this._scrollDataFlag = false;
    }), 100),
    _updateScroll: function() {
      if (this.model.visible) {
        return this._updateScrollThrottledRepeater();
      }
    },
    _processFilterApply: function() {
      return this.model.collection.page._postNavigate();
    },
    _processMode: function() {
      this.periodGroups.setMode(this.model.frame.mode());
      return this._updateScroll();
    },
    _renderMode: function() {
      var _mode, _prevMode;
      _mode = this.model.frame.mode();
      _prevMode = this.model.frame.previous('mode');
      return this.$el.removeClass("" + _prevMode + "-mode").addClass("" + _mode + "-mode");
    },
    _postInitFrame: function() {
      this.model.frame.periodBlocks.on('add', this._updateScroll, this);
      this.model.frame.periodBlocks.on('remove', this._updateScroll, this);
      this.model.frame.periodBlocks.on('updateScroll', this._updateScroll, this);
      this.model.frame.on('change:mode', this._renderMode, this);
      return this.model.frame.on('change:mode', this._processMode, this);
    },
    initialize: function() {
      this.frameInitDef = new $.Deferred();
      this._scrollDataFlag = false;
      this.periodGroups = new PeriodGroups();
      this.groupFilters = new GroupFilters([], {
        periodGroups: this.periodGroups
      });
      this.groupFilters.on('apply', this._processFilterApply, this);
      this.periodGroups.week = this;
      this.periodGroups.on('add', this.addPeriodGroup, this);
      this.periodGroups.on('add', this._updateScroll, this);
      this.periodGroups.on('remove', this._updateScroll, this);
      this.model.on('rendered', this._initFrameMode, this);
      this.model.on('rendered', this._initFrame, this);
      this.proxyCall('initialize', arguments);
      this._renderMode();
      this.frameInitDef.done(_.bind(this._postInitFrame, this));
      this.scroller = $('.page.page-calendar .scroller');
      this.scrollerInner = $('.page.page-calendar .scroller .inner');
      return true;
    }
  })));
});
