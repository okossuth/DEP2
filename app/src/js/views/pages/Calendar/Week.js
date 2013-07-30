define(['views/pages/Calendar/DaysCollectorPage', 'views/pages/PageBase', 'collections/calendar/Weeks', '_common/ToolsBase', 'ovivo'], function(DaysCollectorPage, PageBase, Weeks, ToolsBase) {
  return PageBase.extend(_.extend({}, DaysCollectorPage, {
    el: '.page.page-calendar .week-view',
    name: 'week',
    Collectors: Weeks,
    events: {
      'mousewheel': 'processWheel'
    },
    processScroll: function(e, val) {
      if (val == null) {
        val = this.scroller[0].scrollTop;
      }
      if (this._scrollDataFlag === false) {
        this._offsetHeight = this.el.offsetHeight;
        this.scrollerInner.height(this._scrollHeight = this.el.scrollHeight);
        this._scrollDataFlag = true;
      }
      if (this.currentModel !== null) {
        this.currentModel.view.processScroll(val, this._offsetHeight);
      }
      return true;
    },
    processWheel: function(e, delta, deltaX, deltaY) {
      return this.scroller[0].scrollTop -= delta * 50;
    },
    _getKey: function(year, number) {
      return "" + year + "-" + number;
    },
    _getObj: function(year, number) {
      return {
        year: year,
        number: number
      };
    },
    _postNavigate: function() {
      this.scroller[0].scrollTop = 0;
      this.processScroll(null, 0);
      if (this.currentModel !== null) {
        return this.currentModel.view._updateScroll();
      }
    },
    prev: function() {
      this.current.moveToDayOfWeek(4, -1);
      this.navigate(this.current.getFullYear(), this.current.getWeek());
      return this._postNavigate();
    },
    next: function() {
      this.current.moveToDayOfWeek(4, 1);
      this.navigate(this.current.getFullYear(), this.current.getWeek());
      return this._postNavigate();
    },
    today: function() {
      var _now;
      _now = Date.today();
      _now.setWeek(_now.getWeek());
      _now.moveToDayOfWeek(4);
      this.current = _now;
      this.navigate(_now.getFullYear(), _now.getWeek());
      return this._postNavigate();
    },
    _isToday: function(year, number) {
      var _now;
      _now = Date.today();
      _now.setWeek(_now.getWeek());
      _now.moveToDayOfWeek(4);
      return (_now.getFullYear() === year) && (_now.getWeek() === number);
    },
    processCollectorShow: function(collector) {
      var _now, _nowDate, _nowMonth, _nowYear,
        _this = this;
      _now = Date.today();
      _nowDate = _now.getDate();
      _nowMonth = _now.getMonth();
      _nowYear = _now.getFullYear();
      this.values.week.html(collector.number());
      this.values.month.html(ovivo.config.MONTHS[collector.month()].slice(0, 3));
      this.values.year.html(collector.year());
      this.datesBlocks.removeClass('today');
      return _.each(collector.days, function(obj, i) {
        if ((_nowDate === obj.date) && (_nowMonth === obj.month) && (_nowYear === obj.year)) {
          $(_this.datesBlocks.get(i)).addClass('today');
        }
        return _this.dates[i].innerHTML = "" + obj.date;
      });
    },
    processCollectorHide: function(month) {},
    processWindowResize: function() {
      this._scrollDataFlag = false;
      if (this.currentModel != null) {
        this.currentModel.view._updateScroll();
      }
      return true;
    },
    initialize: function() {
      var _now;
      this.current = _now = new Date.today();
      this._scrollDataFlag = false;
      $(window).on('resize', _.bind(this.processWindowResize, this));
      _now.setWeek(_now.getWeek());
      _now.moveToDayOfWeek(4);
      this._initialize();
      this.title = $('.page.page-calendar header span.title.week-title');
      this.dates = $('.page.page-calendar header .weekdays-row span.date');
      this.datesBlocks = $('.page.page-calendar header .weekdays-row li');
      this.collectorsList = this.$('.weeks-list');
      this.values = {
        week: $('.page.page-calendar header .week-banner .week-value'),
        month: $('.page.page-calendar header .week-banner .month-value'),
        year: $('.page.page-calendar header .week-banner .year-value')
      };
      this.todayButton = $('.page.page-calendar header .week-today');
      this.scroller = $('.page.page-calendar .scroller');
      this.scrollerInner = $('.page.page-calendar .scroller .inner');
      this.navigate(_now.getFullYear(), _now.getWeek());
      return true;
    }
  }));
});
