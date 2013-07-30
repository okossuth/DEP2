define([], function() {
  return {
    addEvent: function(event) {
      var _group;
      if ((_group = this.periodGroups.get(event.group())) != null) {
        _group.addEvent(event);
      }
      return true;
    },
    removeEvent: function(event) {
      var _group;
      if ((_group = this.periodGroups.get(event.group())) != null) {
        _group.removeEvent(event);
      }
      return true;
    },
    addHoursBlock: function(block) {
      var _periodGroup;
      _periodGroup = this.periodGroups.get(block.group());
      if (_periodGroup != null) {
        _periodGroup.addHoursBlock(block);
      }
      return true;
    },
    removeHoursBlock: function(block) {
      var _periodGroup;
      _periodGroup = this.periodGroups.get(block.group());
      if (_periodGroup != null) {
        _periodGroup.removeHoursBlock(block);
      }
      return true;
    },
    addHoursBlocks: function(arr) {
      var _this = this;
      return _.each(arr, function(block) {
        return _this.addHoursBlock(block);
      });
    },
    removeHoursBlocks: function(arr) {
      var _this = this;
      return _.each(arr, function(block) {
        return _this.removeHoursBlocks(block);
      });
    },
    _initFrame: function() {
      this.addHoursBlocks(this.model.frame.hoursBlocks.map(function(b) {
        return b;
      }));
      this.model.frame.hoursBlocks.on('add', this.addHoursBlock, this);
      return this.model.frame.hoursBlocks.on('remove', this.removeHoursBlock, this);
    },
    _postInitFrame: function() {
      this.model.frame.hoursBlocks.on('add', this._updateScroll, this);
      return this.model.frame.hoursBlocks.on('remove', this._updateScroll, this);
    }
  };
});
