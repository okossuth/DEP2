define(['ovivo'], function() {
  return {
    events: {
      'click': 'processClick'
    },
    processClick: function() {
      return console.log(this.model.groupCache);
    },
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
      if (_name === 'resourceNeed') {
        return this.resourceNeeds[elem.id];
      }
    },
    _removeModel: function(model, hash) {
      var _view;
      _view = hash[model.id];
      model.removeDay(this.model);
      if (_view != null) {
        _view.remove();
        delete hash[model.id];
        this._removeFromArr(model, this.elements);
      }
      return true;
    },
    _insertElement: (function() {
      var _compare, _order;
      _order = ['resourceNeed'];
      _compare = function(a, b) {
        var _delta, _orderA, _orderB, _timeA, _timeB;
        _orderA = _.indexOf(_order, a.typeName);
        _orderB = _.indexOf(_order, b.typeName);
        if (((_delta = _orderB - _orderA) !== 0) || (_orderA === 0)) {
          return _delta;
        } else {
          _timeA = new Date(Date.parse(a.start_time()));
          _timeB = new Date(Date.parse(b.start_time()));
          return _timeB - _timeA;
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
    highlight: function(model) {
      return this._getFromHash(model).highlight();
    },
    removeHighlight: function(model) {
      return this._getFromHash(model).removeHighlight();
    },
    _addModel: function(model, view, hash) {
      hash[model.id] = view;
      model.addDay(this.model);
      return this._insertElement(model, view, hash);
    },
    addResourceNeed: function(view, model) {
      return this._addModel(model, view, this.resourceNeeds);
    },
    removeResourceNeed: function(model) {
      return this._removeModel(model, this.resourceNeeds);
    },
    setToday: function() {
      return this.$el.addClass('current');
    },
    initialize: function() {
      this.proxyCall('initialize', arguments);
      this.model.resourceNeeds = this.resourceNeeds = {};
      this.elements = [];
      this.calendarItems = this.$('.calendar-items');
      return true;
    }
  };
});
