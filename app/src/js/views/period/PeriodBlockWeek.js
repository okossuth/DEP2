define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'table',
    template: Handlebars.templates['periodBlockWeek'],
    groupTemplate: Handlebars.templates['periodBlockWeek_group'],
    preventChangeRender: true,
    events: {},
    processClick: function() {
      return window.a = this.model.eventUsers;
    },
    getEmployeeHours: function(num) {
      var _val;
      _val = (this.resourceNeed().endValue() - this.resourceNeed().startValue()) / 60 * num;
      if ((_val * 100 - Math.floor(_val * 100)) !== 0) {
        _val = parseFloat(_val.toFixed(2));
      }
      return "" + _val + "h";
    },
    _renderSkill: function() {
      return this.model.set('skill_name', ovivo.desktop.resources.skills.get(this.skill()).name());
    },
    _processNum_employees: function() {
      return this.model.set('total_hours', this.getEmployeeHours(this.num_employees()));
    },
    _processStart_time: function() {
      return this.model.set('total_hours', this.getEmployeeHours(this.num_employees()));
    },
    _processEnd_time: function() {
      return this.model.set('total_hours', this.getEmployeeHours(this.num_employees()));
    },
    postRender: function() {
      this.header = this.$('.header .inner');
      this.content = this.$('.content .inner');
      this.footer = this.$('.footer .inner');
      this.employees = this.$('.content .employees');
      this.emptySlots = this.$('.content div.empty');
      this.header.on('click', _.bind(this.processClick, this));
      return this.renderDef.resolve();
    },
    changeHanlder: function(resourceNeed) {
      var _changed,
        _this = this;
      _changed = _.keys(resourceNeed.changed);
      return _.each(_changed, function(field) {
        var _el, _field, _method, _processMethod, _sel;
        _method = "_render" + (field.slice(0, 1).toUpperCase() + field.slice(1));
        _processMethod = "_process" + (field.slice(0, 1).toUpperCase() + field.slice(1));
        if (_this[_method] != null) {
          _this[_method]();
          return;
        }
        if (_this[_processMethod] != null) {
          _this[_processMethod]();
        }
        _sel = "." + field + "-value";
        if ((_el = _this.header.find(_sel)[0]) == null) {
          if ((_el = _this.content.find(_sel)[0]) == null) {
            if ((_el = _this.footer.find(_sel)[0]) == null) {
              return;
            }
          }
        }
        if (typeof (_field = _this[field]) !== 'function') {
          return;
        }
        return $(_el).html(_field.call(_this));
      });
    },
    updateEventsHanlder: function() {
      return this.model.refreshEvents();
    },
    processEmptySlots: function() {
      if (this.empty_slots() <= 0) {
        this.emptySlots.hide();
      } else {
        this.emptySlots.show();
      }
      return true;
    },
    _updateMatchedValues: function(value) {
      var _this = this;
      return this.renderDef.done(function() {
        _this.model.set('matched_employees', value);
        _this.model.set('matched_hours', _this.getEmployeeHours(value));
        return _this.model.set('empty_slots', _this.num_employees() - value);
      });
    },
    _setInitialValues: function() {
      ovivo.desktop.resources.skills.def.done(_.bind(this._renderSkill, this));
      return this._processNum_employees();
    },
    _attachHandlers: function() {
      this.model.off('rendered', this._attachHandlers);
      this.listenTo(this.resourceNeed(), 'change', this.changeHanlder);
      this.listenTo(this.resourceNeed(), 'change:start_time', this.updateEventsHanlder);
      this.listenTo(this.resourceNeed(), 'change:end_time', this.updateEventsHanlder);
      this.listenTo(this.resourceNeed(), 'change:skill', this.updateEventsHanlder);
      this.model.on('change', this.changeHanlder, this);
      this.model.on('change:empty_slots', this.processEmptySlots, this);
      return this._setInitialValues();
    },
    _detachHandlers: function() {
      this.stopListening(this.resourceNeed(), 'change', this.changeHanlder);
      this.stopListening(this.resourceNeed(), 'change:start_time', this.updateEventsHanlder);
      this.stopListening(this.resourceNeed(), 'change:end_time', this.updateEventsHanlder);
      this.stopListening(this.resourceNeed(), 'change:skill', this.updateEventsHanlder);
      this.model.off('change', this.changeHanlder);
      return this.model.off('change:empty_slots', this.processEmptySlots);
    },
    _processRemove: function() {
      this.header.remove();
      this.content.remove();
      this.footer.remove();
      return this._detachHandlers();
    },
    addEventUser: function(eventUser) {
      var _i,
        _this = this;
      _i = this.model.eventUsers.indexOf(eventUser);
      if (_i === (this.model.eventUsers.length - 1)) {
        this.renderDef.done(function() {
          return _this.employees.append(eventUser.view.el);
        });
      } else {
        this.renderDef.done(function() {
          return _this.model.eventUsers.at(_i + 1).view.$el.before(eventUser.view.el);
        });
      }
      return true;
    },
    _updateScroll: function() {
      return this.model.trigger('updateScroll');
    },
    initialize: function() {
      var _this = this;
      this.model.eventUsers.on('add', this.addEventUser, this);
      this.model.eventUsers.on('add', this._updateScroll, this);
      this.model.eventUsers.on('remove', this._updateScroll, this);
      this.renderDef = new $.Deferred();
      this.renderDef.done(function() {
        return _this._attachHandlers();
      });
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
