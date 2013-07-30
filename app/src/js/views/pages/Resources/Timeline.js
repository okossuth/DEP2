define(['views/pages/PageBase', '_features/trailZero', 'ovivo'], function(PageBase, trailZero) {
  return PageBase.extend({
    el: '.page.page-resources .content-timeline',
    name: 'timeline',
    events: {},
    scaleTemplate: Handlebars.templates['scale'],
    skillsTemplate: Handlebars.templates['timelineSkills'],
    skillColumnsTemplate: Handlebars.templates['skillColumns'],
    close: function() {
      return this.page.showSubView('periods');
    },
    scale: function() {
      var _arr, _end, _i, _obj;
      _arr = [];
      _i = new Date(Date.parse(this.model.start_date()));
      _end = new Date(Date.parse(this.model.end_date()));
      _end = _end.setDate(_end.getDate() + 1);
      while (_i <= _end) {
        _obj = {
          date: "" + (trailZero(_i.getDate())) + "." + (trailZero(_i.getMonth() + 1)) + "." + (_i.getFullYear())
        };
        if ((_i - _end) === 0) {
          _obj.last = true;
        }
        _arr.push(_obj);
        _i.setDate(_i.getDate() + 1);
      }
      return _arr;
    },
    skills: function() {
      var _keys, _percentage;
      _keys = this.blocks.getKeys('skill');
      _percentage = 100 / _keys.length;
      return _.map(_.map(this.blocks.getKeys('skill'), function(id) {
        return ovivo.desktop.resources.skills.get(id);
      }), function(skill) {
        return {
          pk: skill.pk(),
          name: skill.name(),
          width: _percentage + '%'
        };
      });
    },
    _renderTimeline: function() {
      this.scaleContainer.css('height', 'auto');
      this.columns.css('height', 'auto');
      this.scaleContainer.children().remove();
      this.scaleContainer.append($(this.scaleTemplate(this)).children());
      this.skillsContainer.children().remove();
      this.skillsContainer.append($(this.skillsTemplate(this)).children());
      this.columns.children().remove();
      return this.columns.append($(this.skillColumnsTemplate(this)).children());
    },
    _initScale: function() {
      var _end, _start;
      _start = new Date(Date.parse(this.model.start_date()));
      _end = new Date(Date.parse(this.model.end_date()));
      _end = _end.setDate(_end.getDate() + 1);
      return this.timeRange = _end - _start;
    },
    _renderBlocks: function() {
      var _start,
        _this = this;
      _start = new Date(Date.parse(this.model.start_date()));
      return this.blocks.each(function(block) {
        block.view.adjustPosition(_start, _this.timeRange, _this.height);
        return _this.skillColumns[block.skill()].append(block.view.el);
      });
    },
    initPeriod: function() {
      var _this = this;
      this.blocks = this.model.getBlocks();
      this._renderTimeline();
      this.height = this.scaleContainer.height();
      this.scaleContainer.height(this.height);
      this.columns.height(this.height);
      this.skillColumns = {};
      _.each(this.blocks.getKeys('skill'), function(id) {
        return _this.skillColumns[id] = _this.$(".skill-column-" + id + " ul.blocks");
      });
      this._initScale();
      return this._renderBlocks();
    },
    setPeriod: (function() {
      var _attachHanlders, _detachHanlders;
      _attachHanlders = function(model) {};
      _detachHanlders = function(model) {};
      return function(model) {
        this.model = model;
        if (this.prevModel != null) {
          _detachHanlders.call(this, this.prevModel);
        }
        _attachHanlders.call(this, this.model);
        this.prevModel = this.model;
        return this.initPeriod();
      };
    })(),
    initialize: function() {
      this.scaleContainer = this.$('ul.scale');
      this.skillsContainer = this.$('ul.skills');
      this.columns = this.$('ul.skill-columns');
      return true;
    }
  });
});
