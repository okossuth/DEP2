define(['ovivo'], function() {
  return {
    _gettersNames: ['date', 'disabled', 'month', 'week_number', 'year', 'dateObj'],
    addResourceNeed: function(model) {
      var _view,
        _this = this;
      _view = model.getView();
      this.view.addResourceNeed(_view, model);
      return _.each(_.reduce(_.intersection(model._groups, _.keys(this.groupCache)), (function(memo, group) {
        return memo.concat(_this.groupCache[group]);
      }), []), function(av) {
        return _view.addAvailability(av);
      });
    },
    removeResourceNeed: function(model) {
      return this.view.removeResourceNeed(model);
    },
    addAvailability: function(model) {
      var _arr,
        _this = this;
      if ((_arr = this.groupCache[model.group()]) == null) {
        _arr = this.groupCache[model.group()] = [];
      }
      _arr.push(model);
      return _.each(this.resourceNeeds, function(view) {
        return view.addAvailability(model, _this.groupCache);
      });
    },
    checkToday: function() {
      var _now;
      if (this.collection.todayFound !== true) {
        _now = Date.today();
        if ((_now - this.dateObj()) === 0) {
          this.view.setToday();
          return this.collection.todayFound = true;
        }
      }
    },
    highlight: function(model) {
      return this.view.highlight(model);
    },
    removeHighlight: function(model) {
      return this.view.removeHighlight(model);
    },
    initialize: function(attrs, options) {
      this.proxyCall('initialize', arguments);
      this.set('pk', "" + (this.year()) + "-" + (this.month()) + "-" + (this.date()) + (this.disabled() === true ? '-disabled' : ''));
      this.set('dateObj', new Date(this.year(), this.month(), this.date()));
      this.view = new this.View({
        model: this,
        el: options.el
      });
      this.checkToday();
      this.groupCache = {};
      return true;
    }
  };
});
