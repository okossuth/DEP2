// Generated by CoffeeScript 1.6.2
define(['models/resources/ResourceBase', 'collections/period/PeriodBlocks', 'ovivo'], function(ResourceBase, PeriodBlocks) {
  return ResourceBase.extend({
    _gettersNames: ['start', 'end'],
    _compilePeriodGroups: function(period, start, end) {
      var _blocksInitial, _groups;

      if ((_groups = period.groups()) == null) {
        return [];
      }
      _blocksInitial = period.compile(start, end);
      return _.union.apply(_, _.map(_groups, function(group) {
        return _blocksInitial.map(function(block) {
          block = _.clone(block);
          block.group = group;
          block.code += "." + group;
          return block;
        });
      }));
    },
    addPeriod: function(period) {
      var _blocks;

      _blocks = this._compilePeriodGroups(period, this.start(), this.end());
      return this.periodBlocks.add(_blocks);
    },
    removePeriod: function(period) {
      var _this = this;

      return _.each(this.periodBlocks.getBy('pk', period.pk()), function(block) {
        return _this.periodBlocks.remove(block);
      });
    },
    changePeriod: function(period) {
      var _add, _curBlocks, _curCodes, _hash, _newBlocks, _newCodes, _remove,
        _this = this;

      _hash = {};
      _curBlocks = this.periodBlocks.getBy('pk', period.pk());
      _curCodes = _.map(_curBlocks, function(block) {
        return block.code();
      });
      _newBlocks = this._compilePeriodGroups(period, this.start(), this.end());
      _newCodes = _.map(_newBlocks, function(block) {
        var _code;

        _code = block.code;
        _hash[_code] = block;
        return _code;
      });
      _remove = _.difference(_curCodes, _newCodes);
      _add = _.difference(_newCodes, _curCodes);
      _.each(_remove, function(code) {
        return _this.periodBlocks.remove(_this.periodBlocks.getBy('code', code));
      });
      return _.each(_add, function(code) {
        return _this.periodBlocks.add(_hash[code]);
      });
    },
    addEvent: function(event) {
      var _byDate, _bySkill;

      _byDate = this.periodBlocks.getBy('dateKey', event.date());
      _bySkill = this.periodBlocks.getBy('skill', event.skill());
      return _.each(_.intersection(_byDate, _bySkill), function(block) {
        return block.addEvent(event);
      });
    },
    initialize: function(attrs, options) {
      this.proxyCall('initialize', arguments);
      this.periodBlocks = new PeriodBlocks([], options);
      return true;
    }
  });
});
