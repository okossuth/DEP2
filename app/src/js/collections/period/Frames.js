define(['models/period/Frame', 'ovivo'], function(Model) {
  return Backbone.Collection.extend({
    model: Model,
    doNotFetch: true,
    addFrame: function(start, end, options) {
      var _model;
      _model = new Model({
        start: start,
        end: end,
        mode: this.displayMode
      }, options);
      this.add(_model);
      return _model;
    },
    processFrameAdd: function(frame) {
      return ovivo.desktop.resources.periods.def.done(function() {
        return ovivo.desktop.resources.periods.each(function(period) {
          return frame.addPeriod(period);
        });
      });
    },
    processPeriodAdd: function(period) {
      return this.each(function(frame) {
        return frame.addPeriod(period);
      });
    },
    processPeriodRemove: function(period) {
      return this.each(function(frame) {
        return frame.removePeriod(period);
      });
    },
    processPeriodUpdateFrames: function(period) {
      return this.each(function(frame) {
        return frame.changePeriod(period);
      });
    },
    processEventAdd: function(event) {
      if (event.skill() == null) {
        return;
      }
      return this.each(function(frame) {
        return frame.addEvent(event);
      });
    },
    processEventRemove: function(event) {
      if (event.periodBlock == null) {
        return;
      }
      return event.periodBlock.removeEvent(event);
    },
    processEventChange: function(event) {
      if (event.periodBlock != null) {
        return;
      }
      return this.processEventAdd(event);
    },
    processEventAddEmployees: function(event) {
      if (event.skill() == null) {
        return;
      }
      return this.each(function(frame) {
        return frame.addEventEmployees(event);
      });
    },
    processEventRemoveEmployees: function(event) {
      return this.each(function(frame) {
        return frame.removeEventEmployees(event);
      });
    },
    processEventChangeEmployees: function(event) {
      return this.each(function(frame) {
        frame.removeEventEmployees(event);
        return frame.addEventEmployees(event);
      });
    },
    processWorkingHourAdd: function(wh) {
      return this.each(function(frame) {
        return frame.addWorkingHour(wh);
      });
    },
    processWorkingHourRemove: function(wh) {
      return this.each(function(frame) {
        return frame.removeWorkingHour(wh);
      });
    },
    processWorkingHourChange: function(wh) {
      return this.each(function(frame) {
        return frame.changeWorkingHour(wh);
      });
    },
    changeDisplayMode: function(value) {
      this.displayMode = value;
      return this.each(function(model) {
        return model.set('mode', value);
      });
    },
    _handlers: {
      periods: {
        method: 'processPeriod{{s}}',
        events: ['add', 'remove', 'updateFrames']
      },
      events: {
        method: 'processEvent{{s}}',
        events: ['add', 'remove', 'change']
      },
      eventsEmployees: {
        method: 'processEvent{{s}}Employees',
        events: ['add', 'remove', 'change']
      },
      workingHours: {
        method: 'processWorkingHour{{s}}',
        events: ['add', 'remove', 'change']
      }
    },
    _initHandlers: function(resource, handlersGroup) {
      var _obj,
        _this = this;
      if (handlersGroup == null) {
        handlersGroup = resource;
      }
      return _.each((_obj = this._handlers[handlersGroup]).events, function(event) {
        var _method;
        _method = _obj.method.replace(/\{\{s\}\}/, event.slice(0, 1).toUpperCase() + event.slice(1));
        return ovivo.desktop.resources[resource].on(event, _this[_method], _this);
      });
    },
    _initSequence: [
      {
        deps: 'periods',
        func: function() {
          return this._initHandlers('periods');
        }
      }, {
        deps: 'periods,events',
        func: function() {
          this._initHandlers('events');
          return this._initHandlers('events', 'eventsEmployees');
        }
      }, {
        deps: 'periods,workingHours',
        func: function() {
          return this._initHandlers('workingHours');
        }
      }
    ],
    initialize: function() {
      var _this = this;
      this.on('add', this.processFrameAdd, this);
      _.each(this._initSequence, function(obj) {
        return $.when.apply($, _.map(obj.deps.split(','), function(s) {
          return ovivo.desktop.resources[s].def;
        })).done(function() {
          return obj.func.call(_this);
        });
      });
      return true;
    }
  });
});
