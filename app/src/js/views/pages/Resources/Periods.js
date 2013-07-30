define(['views/pages/PageBase', '_features/PercentageIndicator', 'collections/PeriodMonths', 'ovivo'], function(PageBase, PercentageIndicator, PeriodMonths) {
  return PageBase.extend({
    el: '.page.page-resources .content-periods',
    name: 'periods',
    events: {},
    createNew: function() {
      ovivo.desktop.popups.editPopupPeriod.show();
      return ovivo.desktop.popups.editPopupPeriod.create();
    },
    periodAdd: function(model) {
      var _date, _key, _period;
      this.empty.hide();
      _date = new Date(Date.parse(model.start_date()));
      _key = "" + (_date.getFullYear()) + "-" + (_date.getMonth());
      if ((_period = this.periodMonths.get(_key)) == null) {
        _period = this.periodMonths.addMonth({
          year: _date.getFullYear(),
          month: _date.getMonth()
        });
      }
      _period.addPeriod(model);
      return true;
    },
    monthAdd: function(model) {
      var _i;
      _i = this.periodMonths.indexOf(model);
      if (_i === (this.periodMonths.length - 1)) {
        return this.monthsContainer.append(model.view.el);
      } else {
        return this.periodMonths.at(_i + 1).view.$el.before(model.view.el);
      }
    },
    initialize: function() {
      this.on('action:add', this.createNew, this);
      this.monthsContainer = this.$('ul.month-sections');
      this.empty = this.$('ul.month-sections li.empty');
      this.periodMonths = new PeriodMonths();
      this.periodMonths.on('add', this.monthAdd, this);
      ovivo.desktop.resources.periods.on('add', this.periodAdd, this);
      return true;
    }
  });
});
