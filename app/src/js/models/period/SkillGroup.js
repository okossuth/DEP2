define(['collections/period/SkillEmployeeRows', 'models/resources/ResourceBase', 'views/period/SkillGroup', 'ovivo'], function(SkillEmployeeRows, ResourceBase, View) {
  return ResourceBase.extend({
    _gettersNames: ['pk', 'group', 'frame'],
    clearScroll: function() {
      return this.view.clearScroll();
    },
    processScroll: function(obj, val) {
      return this.view.processScroll(obj, val);
    },
    addBlock: function(block) {
      this.view.addBlock(block);
      return this._blocksCounter += 1;
    },
    removeBlock: function(block) {
      this._blocksCounter -= 1;
      if (this._blocksCounter === 0) {
        return this.collection.remove(this);
      }
    },
    addEvent: function(event) {
      var _frame,
        _this = this;
      if (this.events[event.pk()] != null) {
        return;
      }
      if (this.employeesDef.state() !== 'resolved') {
        return;
      }
      _frame = this.frame();
      if ((event.dateObj > _frame.end()) || (event.dateObj < _frame.start())) {
        return;
      }
      this.events[event.pk()] = _.compact(_.map(event.users(), function(obj) {
        var _row;
        if ((_row = _this.skillEmployeeRows.get(obj.pk)) == null) {
          return;
        }
        return _row.addEvent(event, obj);
      }));
      return true;
    },
    removeEvent: function(event) {
      var _arr;
      if (this.employeesDef.state() !== 'resolved') {
        return;
      }
      if ((_arr = this.events[event.pk()]) == null) {
        return;
      }
      _.each(_arr, function(view) {
        return view.remove();
      });
      delete this.events[event.pk()];
      return true;
    },
    addHoursBlock: function(block) {
      var _row;
      if (this.employeesDef.state() !== 'resolved') {
        return;
      }
      _row = this.skillEmployeeRows.get(block.user());
      if (_row) {
        return _row.addHoursBlock(block);
      }
    },
    _initEvents: function() {
      var _this = this;
      return ovivo.desktop.resources.events.def.done(function() {
        return _.each(ovivo.desktop.resources.events.getBy({
          'skill': _this.pk(),
          'group': _this.group()
        }), function(e) {
          return _this.addEvent(e);
        });
      });
    },
    _initEmployees: function(pk, group) {
      var _this = this;
      return ovivo.desktop.resources.users.def.done(function() {
        var _arr;
        _this.users = _arr = ovivo.desktop.resources.users.getBy({
          'skills': pk,
          'groups': group
        });
        if (!(_arr instanceof Array)) {
          return;
        }
        _this.skillEmployeeRows.add(_.map(_arr, function(user) {
          return {
            pk: user.pk(),
            user: user
          };
        }));
        return _this.employeesDef.resolve();
      });
    },
    _initWorkingHours: function() {
      var _blocks,
        _this = this;
      this.frame().addWorkingHours(ovivo.desktop.resources.workingHours.getBy({
        'groups': this.group(),
        'user': _.map(this.users, function(u) {
          return u.pk();
        })
      }), this.group());
      _blocks = this.frame().hoursBlocks.getBy({
        'user': _.map(this.users, function(u) {
          return u.pk();
        }),
        'group': this.group()
      });
      return _.each(_blocks, function(b) {
        return _this.addHoursBlock(b);
      });
    },
    initialize: function(attrs, options) {
      this.employeesDef = new $.Deferred();
      this.View = View;
      this.events = {};
      this.skillEmployeeRows = new SkillEmployeeRows();
      this._initEmployees(attrs.pk, attrs.group);
      this._blocksCounter = 0;
      this.proxyCall('initialize', arguments);
      this.employeesDef.done(_.bind(this._initEvents, this));
      this.employeesDef.done(_.bind(this._initWorkingHours, this));
      return true;
    }
  });
});
