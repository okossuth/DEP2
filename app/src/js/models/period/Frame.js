// Generated by CoffeeScript 1.6.2
define(['models/resources/ResourceBase', 'collections/period/PeriodBlocks', 'collections/period/HoursBlocks', 'ovivo'], function(ResourceBase, PeriodBlocks, HoursBlocks) {
  return ResourceBase.extend({
    _gettersNames: ['start', 'end', 'mode'],
    _compileGroups: function(model, start, end, codeGenerator, group) {
      var _blocksInitial, _groups;

      if (group != null) {
        if (group instanceof Array) {
          _groups = group;
        } else {
          _groups = [group];
        }
      } else if ((_groups = model.groups()) == null) {
        return [];
      }
      _blocksInitial = model.compile(start, end);
      return _.union.apply(_, _.map(_groups, function(group) {
        return _blocksInitial.map(function(block) {
          block = _.clone(block);
          block.group = group;
          block.code += codeGenerator(group, block);
          return block;
        });
      }));
    },
    _changeModel: function(model, compileMethod, collection, groups) {
      var _add, _curBlocks, _curCodes, _hash, _newBlocks, _newCodes, _remove,
        _this = this;

      _hash = {};
      _curBlocks = collection.getBy('pk', model.pk());
      _curCodes = _.map(_curBlocks, function(block) {
        return block.code();
      });
      _newBlocks = this[compileMethod](model, this.start(), this.end(), groups);
      _newCodes = _.map(_newBlocks, function(block) {
        var _code;

        _code = block.code;
        _hash[_code] = block;
        return _code;
      });
      _remove = _.difference(_curCodes, _newCodes);
      _add = _.difference(_newCodes, _curCodes);
      _.each(_remove, function(code) {
        return collection.remove(collection.getBy('code', code));
      });
      return _.each(_add, function(code) {
        return collection.add(_hash[code]);
      });
    },
    _codeGeneratorPeriod: function(group, block) {
      return "." + group + "." + (block.resourceNeed.start_time()) + "." + (block.resourceNeed.end_time()) + "." + (block.resourceNeed.skill());
    },
    _codeGeneratorWorkingHour: function(group, block) {
      return "." + group;
    },
    _compilePeriodGroups: function(period, start, end) {
      return this._compileGroups(period, start, end, this._codeGeneratorPeriod);
    },
    _compileWorkingHoursGroups: function(wh, start, end, group) {
      return this._compileGroups(wh, start, end, this._codeGeneratorWorkingHour, group);
    },
    addWorkingHours: function(whs, group) {
      var _blocks,
        _this = this;

      whs = _.filter(whs, function(wh) {
        var _arr, _key;

        _key = group != null ? "" + (wh.pk()) + "-" + group : wh.pk();
        if (_this.whsHash[_key] != null) {
          return false;
        }
        _this.whsHash[_key] = wh;
        if (group != null) {
          if ((_arr = _this.whsGroupsHash[wh.pk()]) == null) {
            _arr = _this.whsGroupsHash[wh.pk()] = [];
          }
          _arr.push(group);
        }
        return true;
      });
      _blocks = [].concat.apply([], _.map(whs, function(wh) {
        return _this._compileWorkingHoursGroups(wh, _this.start(), _this.end(), group);
      }));
      return this.hoursBlocks.add(_blocks);
    },
    addWorkingHour: function(wh, group) {
      var _arr, _blocks, _key;

      _key = "" + (wh.pk()) + "-" + group;
      if (this.whsHash[_key] != null) {
        return;
      }
      this.whsHash[_key] = wh;
      if (group != null) {
        if ((_arr = this.whsGroupsHash[wh.pk()]) == null) {
          _arr = this.whsGroupsHash[wh.pk()] = [];
        }
        _arr.push(group);
      }
      _blocks = this._compileWorkingHoursGroups(wh, this.start(), this.end(), group);
      return this.hoursBlocks.add(_blocks);
    },
    removeWorkingHour: function(wh) {
      var _arr, _pk,
        _this = this;

      _pk = wh.pk();
      delete this.whsHash[_pk];
      if ((_arr = this.whsGroupsHash[_pk]) != null) {
        _.each(_arr, function(group) {
          return delete _this.whsHash["" + _pk + "-" + group];
        });
      }
      delete this.whsGroupsHash[_pk];
      return _.each(this.hoursBlocks.getBy('pk', _pk), function(block) {
        return _this.hoursBlocks.remove(block);
      });
    },
    changeWorkingHour: function(wh) {
      return this._changeModel(wh, '_compileWorkingHoursGroups', this.hoursBlocks, this.whsGroupsHash[wh.pk()]);
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
      return this._changeModel(period, '_compilePeriodGroups', this.periodBlocks);
    },
    addEvent: function(event) {
      var _byDate, _bySkill;

      _byDate = this.periodBlocks.getBy('dateKey', event.date());
      _bySkill = this.periodBlocks.getBy('skill', event.skill());
      return _.each(_.intersection(_byDate, _bySkill), function(block) {
        return block.addEvent(event);
      });
    },
    addEventEmployees: function(event) {
      if ((event.dateObj > this.end()) || (event.dateObj < this.start())) {
        return;
      }
      return this.collector.view.addEvent(event);
    },
    removeEventEmployees: function(event) {
      if ((event.dateObj > this.end()) || (event.dateObj < this.start())) {
        return;
      }
      return this.collector.view.removeEvent(event);
    },
    initialize: function(attrs, options) {
      this.proxyCall('initialize', arguments);
      this.whsHash = {};
      this.whsGroupsHash = {};
      this.periodBlocks = new PeriodBlocks([], options);
      this.hoursBlocks = new HoursBlocks([]);
      return true;
    }
  });
});
