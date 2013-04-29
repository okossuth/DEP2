// Generated by CoffeeScript 1.6.2
define(['ovivo'], function() {
  return {
    events: {},
    render: function() {
      return true;
    },
    _removeFromArr: function(elem, arr) {
      var _i;

      _i = _.indexOf(arr, elem);
      return arr.splice(_i, 1);
    },
    _insertBefore: function(elem, arr, next) {
      var _i;

      _i = _.indexOf(arr, next);
      return arr.splice(_i, 0, elem);
    },
    _getFromHash: function(elem) {
      var _name;

      _name = elem.typeName;
      if (_name === 'inactivity') {
        return this.inactivities[elem.id];
      } else if (_name === 'workingHour') {
        return this.workingHours[elem.id];
      } else if (_name === 'event') {
        return this.events[elem.id];
      }
    },
    _removeModel: function(model, hash) {
      var _view;

      _view = hash[model.id];
      if (_view != null) {
        _view.remove();
        delete hash[model.id];
        this._removeFromArr(model, this.elements);
      }
      return true;
    },
    _insertElement: (function() {
      var _compare, _eventTypeOrder, _order;

      _order = ['inactivity', 'workingHour', 'event'];
      _eventTypeOrder = ['closed', 'open-responses', 'open'];
      _compare = function(a, b) {
        var _delta, _eventOrderA, _eventOrderB, _orderA, _orderB, _timeA, _timeB;

        _orderA = _.indexOf(_order, a.typeName);
        _orderB = _.indexOf(_order, b.typeName);
        if (((_delta = _orderB - _orderA) !== 0) || (_orderA === 0)) {
          return _delta;
        } else {
          if (((_orderA === 2) && ((_eventOrderA = _.indexOf(_eventTypeOrder, a.type())) === (_eventOrderB = _.indexOf(_eventTypeOrder, b.type())))) || (_orderA !== 2)) {
            _timeA = new Date(Date.parse(a.start_time()));
            _timeB = new Date(Date.parse(b.start_time()));
            return _timeB - _timeA;
          } else {
            return _eventOrderB - _eventOrderA;
          }
        }
      };
      return function(model, view, hash) {
        var _element, _i;

        _i = 0;
        while ((_i < this.elements.length) && (_compare((_element = this.elements[_i]), model) > 0)) {
          _i += 1;
        }
        if (_i < this.elements.length) {
          this._getFromHash(_element).$el.before(view.el);
        } else {
          this.calendarItems.append(view.el);
        }
        return this.elements.splice(_i, 0, model);
      };
    })(),
    _addModel: function(model, view, hash) {
      hash[model.id] = view;
      return this._insertElement(model, view, hash);
    },
    addEvent: function(view, model) {
      this._addModel(model, view, this.events);
      this.updateEventsCounter();
      return true;
    },
    removeEvent: function(model) {
      return this._removeModel(model, this.events);
    },
    addWorkingHour: function(view, model) {
      return this._addModel(model, view, this.workingHours);
    },
    removeWorkingHour: function(model) {
      return this._removeModel(model, this.workingHours);
    },
    addInactivity: function(view, model) {
      return this._addModel(model, view, this.inactivities);
    },
    removeInactivity: function(model) {
      return this._removeModel(model, this.inactivities);
    },
    updateEventsCounter: function() {
      var _amount, _html;

      _amount = _.keys(this.events).length;
      _html = _amount > 1 ? _amount + ' ' + ngettext('event', 'events', this.events) : '';
      return this.eventsCounter.html(_html);
    },
    initialize: function() {
      this.proxyCall('initialize', arguments);
      this.events = {};
      this.workingHours = {};
      this.inactivities = {};
      this.elements = [];
      this.calendarItems = this.$('.calendar-items');
      this.eventsCounter = this.$('.events-counter');
      return true;
    }
  };
});