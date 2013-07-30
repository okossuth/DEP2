define(['models/resources/ResourceBase', 'views/resources/Period', '_features/RuleCompiler', 'collections/period/PeriodBlocks', 'ovivo'], function(ResourceBase, View, RuleCompiler, PeriodBlocks) {
  return ResourceBase.extend({
    typeName: 'period',
    _gettersNames: ['pk', 'start_date', 'end_date', 'templates', 'primary_department', 'groups'],
    changePD: function() {
      this.set('templates', []);
      return this.set('groups', []);
    },
    postEditSync: function(collection, model, originalModel) {
      return this.changeTemplates(originalModel.templates());
    },
    changeTemplates: function(_prev) {
      var _cur, _new, _removed,
        _this = this;
      if (this.id == null) {
        return true;
      }
      _cur = this.templates();
      _removed = _.without.apply(_, [_prev].concat(_cur));
      _new = _.without.apply(_, [_cur].concat(_prev));
      _.each(_removed, function(id) {
        return ovivo.desktop.resources.templates.get(id).removePeriod(_this.id);
      });
      return _.each(_new, function(id) {
        return ovivo.desktop.resources.templates.get(id).addPeriod(_this.id);
      });
    },
    removeTemplate: function(id) {
      var _arr, _i, _val;
      _val = [];
      _arr = this.templates();
      _.each(_arr, function(el) {
        return _val.push(el);
      });
      _i = _val.indexOf(id);
      if (_i !== -1) {
        _val.splice(_i, 1);
      }
      return this.set('templates', _val);
    },
    _blockCodeGenerator: function(obj) {
      var _date;
      _date = obj.date;
      return "" + (_date.getFullYear()) + "-" + (_date.getMonth()) + "-" + (_date.getDate()) + "." + (obj.resourceNeed.pk()) + "." + (obj.template.pk()) + "." + (obj.period.pk());
    },
    compile: function(start, end) {
      var _arr,
        _this = this;
      if (start == null) {
        start = new Date(Date.parse(this.start_date()));
      }
      if (end == null) {
        end = new Date(Date.parse(this.end_date()));
      }
      _arr = [];
      _.each(_.map(this.templates(), function(tId) {
        return ovivo.desktop.resources.templates.get(tId);
      }), function(t) {
        return _.each(_.map(t.resource_needs(), function(rnId) {
          return ovivo.desktop.resources.resourceNeeds.get(rnId);
        }), function(rn) {
          return _arr = _arr.concat(RuleCompiler.compile(start, end, _this.start_date(), _this.end_date(), rn.repeat(), rn.weekdaysHash, {
            resourceNeed: rn,
            template: t,
            period: _this
          }, _this._blockCodeGenerator));
        });
      });
      return _arr;
    },
    getBlocks: function() {
      var _this = this;
      this.blocks = new PeriodBlocks();
      this.blocks.add(this.compile());
      this.hoursBlocks = ovivo.desktop.resources.workingHours.getBlocks(this.blocks.getKeys('skill'), this.groups(), this.start_date(), this.end_date());
      this.blocks.each(function(block) {
        var _hours, _skill;
        _skill = block.skill();
        _hours = _this.hoursBlocks.getBy('date', block.date());
        return _hours = _.filter(_hours, function(hour) {
          var _flag, _groups;
          _flag = false;
          _groups = [];
          _.each(block.groups(), function(group) {
            if (hour.groupsHash[group] === true) {
              _groups.push(group);
              return _flag = true;
            }
          });
          if (_flag && (hour.skillsHash[_skill] ? true : false)) {
            return block.tryHour(hour, _groups);
          }
        });
      });
      return this.blocks;
    },
    initialize: function(attrs, options) {
      this.View = View;
      this.on('change:primary_department', this.changePD, this);
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
