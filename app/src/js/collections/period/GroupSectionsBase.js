define(['_features/binarySearch', 'ovivo'], function(binarySearch) {
  return {
    _scrollComparator: function(obj, val) {
      if (obj.start >= val) {
        return -1;
      }
      if (obj.end < val) {
        return 1;
      }
      return 0;
    },
    addModel: function(obj) {
      var _model;
      _model = new this.model(obj);
      this.add(_model);
      return _model;
    },
    setMode: function(value) {
      return this.mode = value;
    },
    _forwardCall: function(model, methodName) {
      var _args, _inner, _type;
      if (this.innerCollectionName == null) {
        return;
      }
      _args = Array.prototype.slice.call(arguments, 2);
      _inner = '';
      if ((_type = typeof this.innerCollectionName) === 'string') {
        _inner = this.innerCollectionName;
      } else if ((_type === 'object') && (this.mode != null)) {
        _inner = this.innerCollectionName[this.mode];
      }
      if ((_inner == null) || _inner === '') {
        return;
      }
      return model[_inner][methodName].apply(model[_inner], _args);
    },
    processScroll: function(val, height) {
      var _delta, _res;
      _res = binarySearch(this._scrollData, val, this._scrollComparator);
      if (_res !== null) {
        _delta = val - _res.start;
        _res.model.processScroll(_res, _delta);
        this._forwardCall(_res.model, 'processScroll', _delta, height);
      }
      if (_res === this._prev) {
        return;
      }
      this._clearPrev();
      return this._prev = _res;
    },
    _clearPrev: function() {
      if (this._prev == null) {
        return;
      }
      this._prev.model.clearScroll();
      this._forwardCall(this._prev.model, '_clearPrev');
      return true;
    },
    _itemsSelector: function() {
      return this.map(function(m) {
        return m;
      });
    },
    calcScrollData: function() {
      var _this = this;
      if (this._prev != null) {
        this._prev.model.clearScroll();
      }
      this._prev = null;
      this._scrollData = _.map(this._itemsSelector(), function(model) {
        var _h, _t;
        _h = model.view.el.offsetHeight;
        _t = model.view.el.offsetTop;
        _this._forwardCall(model, 'calcScrollData');
        return {
          el: model.view.el,
          model: model,
          start: _t,
          end: _t + _h,
          height: _h
        };
      });
      if (this._scrollData.length > 0) {
        this._scrollData[this._scrollData.length - 1].last = true;
      }
      return true;
    }
  };
});
