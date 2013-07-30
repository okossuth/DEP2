define(['collections/period/EventUsers', 'views/period/PeriodBlock', 'models/period/Block', 'ovivo'], function(EventUsers, View, Block) {
  return Block.extend({
    idAttribute: 'cid',
    _gettersNames: ['date', 'hours', 'resourceNeed', 'template', 'period', 'code', 'skill_name', 'total_hours', 'matched_employees', 'matched_hours', 'empty_slots', 'group', ['start_time', 'resourceNeed'], ['end_time', 'resourceNeed'], ['skill', 'resourceNeed'], ['employee_type', 'resourceNeed'], ['num_employees', 'resourceNeed'], ['groups', 'period'], ['pk', 'period'], ['startValue', 'resourceNeed'], ['endValue', 'resourceNeed']],
    dateKey: function() {
      var _date;
      _date = this.date();
      return "" + (_date.getFullYear()) + "-" + (_date.getMonth()) + "-" + (_date.getDate());
    },
    addHour: function(hour, groups) {
      var _this = this;
      return _.each(groups, function(group) {
        _this.groupsHash[group].push(hour);
        return _this.view.updateGroup(group);
      });
    },
    tryHour: function(hour, groups) {
      var _e, _e1, _s, _s1;
      _s = hour.startValue();
      _e = hour.endValue();
      _s1 = this.startValue();
      _e1 = this.endValue();
      if ((_s <= _s1) && (_e >= _e1)) {
        return this.addHour(hour, groups);
      }
    },
    initGroups: function() {
      var _this = this;
      this.groupsHash = {};
      return _.each(this.get('period').groups(), function(group) {
        return _this.groupsHash[group] = [];
      });
    },
    initEvents: (function() {
      var _init;
      _init = function() {
        var _byDate, _byGroup, _bySkill, _key,
          _this = this;
        _key = this.dateKey();
        _byDate = ovivo.desktop.resources.events.getBy('date', _key);
        _bySkill = ovivo.desktop.resources.events.getBy('skill', this.skill());
        _byGroup = ovivo.desktop.resources.events.getBy('group', this.group());
        return _.each(_.intersection(_byDate, _bySkill, _byGroup), function(event) {
          return _this.addEvent(event);
        });
      };
      return function() {
        return ovivo.desktop.resources.events.def.done(_.bind(_init, this));
      };
    })(),
    removeAllEvents: function() {
      var _this = this;
      return _.each(_.values(this.events), function(event) {
        return _this.removeEvent(event);
      });
    },
    refreshEvents: function() {
      this.removeAllEvents();
      return this.initEvents();
    },
    changeEvent: function(event) {
      this.removeEvent(event);
      return this.addEvent(event);
    },
    addEvent: function(event) {
      var _this = this;
      if (!((event.group() === this.group()) && (event.skill() === this.skill()) && (event.start_time() === this.start_time()) && (event.end_time() === this.end_time()))) {
        return;
      }
      event.periodBlock = this;
      this.events[event.pk()] = event;
      event.on('change', this.changeEvent, this);
      ovivo.desktop.resources.users.def.done(function() {
        var _models;
        _models = _.map(event.users(), function(obj) {
          var _user;
          _user = ovivo.desktop.resources.users.get(obj.pk);
          return {
            event: event,
            name: "" + (_user.first_name()) + " " + (_user.last_name()),
            type: obj.type
          };
        });
        return _.each(_models, function(obj) {
          return _this.eventUsers.add(obj);
        });
      });
      this._updateMatchedValues();
      return true;
    },
    removeEvent: function(event) {
      var _remove,
        _this = this;
      _remove = this.eventUsers.getBy('pk', event.pk());
      _.each(_remove, function(eventUser) {
        return _this.eventUsers.remove(eventUser);
      });
      event.off('change', this.changeEvent);
      delete this.events[event.pk()];
      delete event.periodBlock;
      return this._updateMatchedValues();
    },
    _updateMatchedValues: function() {
      var _closed;
      _closed = this.eventUsers.getBy('type', 'closed');
      if (this.view._updateMatchedValues != null) {
        return this.view._updateMatchedValues(_closed.length);
      }
    },
    initialize: function() {
      var _day;
      this.View = this.collection.View != null ? this.collection.View : View;
      this.initGroups();
      this.events = {};
      this.eventUsers = new EventUsers();
      this.proxyCall('initialize', arguments);
      this.initEvents();
      _day = this.date().getDay() - 1;
      if (_day === -1) {
        _day = 6;
      }
      this.day = _day;
      return true;
    }
  });
});
