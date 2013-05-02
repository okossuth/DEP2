// Generated by CoffeeScript 1.6.2
define(['ovivo'], function() {
  return Backbone.Collection.extend({
    comparator: function(day) {
      return day.dateObj();
    },
    initElements: function(elements, days) {
      var _this = this;

      return _.each(_.zip(elements, days), function(_arg) {
        var day, element;

        element = _arg[0], day = _arg[1];
        _this.add(day, {
          el: element
        });
        return _this;
      });
    },
    _addDayCache: function(day, cache, model) {
      var _arr, _key;

      _key = model.id;
      if ((_arr = cache[_key]) == null) {
        _arr = cache[_key] = [];
      }
      return _arr.push(day);
    },
    _getDaysCache: function(cache, model) {
      return cache[model.id];
    },
    _clearDayCache: function(cache, model) {
      return cache[model.id] = [];
    },
    _rangeResultProcessor: function(rangeResult, hash, adderName) {
      var _this = this;

      return _.each(rangeResult, function(obj) {
        var _day, _key;

        _key = "" + (obj.date.getFullYear()) + "-" + (obj.date.getMonth()) + "-" + (obj.date.getDate());
        _day = _this.get(_key);
        if (_day != null) {
          _this._addDayCache(_day, hash, obj.model);
          return _day[adderName](obj.model, obj);
        }
      });
    },
    processResourceNeeds: function(start, end) {
      return this._rangeResultProcessor(ovivo.desktop.resources.resourceNeeds.processRange(start, end), this.resourceNeedsCache, 'addResourceNeed');
    },
    processResourceNeedAdd: function(workingHour) {
      var end, start;

      start = this.first().dateObj();
      end = this.last().dateObj();
      return this._rangeResultProcessor(workingHour.processRange(start, end), this.resourceNeedsCache, 'addResourceNeed');
    },
    processResourceNeedRemove: function(model) {
      _.each(this._getDaysCache(this.resourceNeedsCache, model), function(day) {
        return day.removeResourceNeed(model);
      });
      return this._clearDayCache(this.resourceNeedsCache, model);
    },
    processResourceNeedChange: function(model) {
      this.processResourceNeedRemove(model);
      return this.processResourceNeedAdd(model);
    },
    initialize: function(models, options) {
      _.extend(this, options);
      this.todayFound = false;
      this.resourceNeedsCache = {};
      ovivo.desktop.resources.resourceNeeds.on('add', this.processResourceNeedAdd, this);
      ovivo.desktop.resources.resourceNeeds.on('remove', this.processResourceNeedRemove, this);
      ovivo.desktop.resources.resourceNeeds.on('change', this.processResourceNeedChange, this);
      return true;
    }
  });
});
