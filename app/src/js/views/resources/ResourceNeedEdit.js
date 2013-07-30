define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'resource-need element',
    template: Handlebars.templates['resourceNeedEdit'],
    groupTemplate: Handlebars.templates['resourceNeedEdit_group'],
    events: {
      'click li.weekday': 'weekdayClick',
      'click .edit-button': 'edit',
      'click .remove-button': 'processRemove'
    },
    weekdayClick: function(e) {
      var _i, _item;
      _item = $(e.target).closest('.weekday');
      _i = _item.index();
      return this.model.processWeek(_i, this.model.weekdaysHash[_i]);
    },
    edit: function() {
      ovivo.desktop.popups.editPopupResourceNeed.show();
      return ovivo.desktop.popups.editPopupResourceNeed.edit(this.model);
    },
    templates: function() {
      var _templates;
      _templates = this.model.templates();
      if (typeof _templates === 'object') {
        return _.map(_.keys(_templates), function(id) {
          return ovivo.desktop.resources.templates.get(id);
        });
      } else {
        return null;
      }
    },
    renderSkill: function() {
      var _ref;
      return this.$('.skill-value').html((_ref = ovivo.desktop.resources.skills.get(this.model.skill())) != null ? _ref.name() : void 0);
    },
    renderPD: function() {
      var _ref;
      return this.$('.pd-value').html((_ref = ovivo.desktop.resources.primaryDepartments.get(this.model.primary_department())) != null ? _ref.name() : void 0);
    },
    renderTemplates: function() {
      var _templates;
      _templates = this.templates();
      if ((_templates !== null) && (_templates.length > 0)) {
        return this.$('.templates-names span').html(_.map(this.templates(), function(template) {
          return template.name();
        }).join(', '));
      } else {
        return this.$('.templates-names').addClass('empty');
      }
    },
    postRender: function() {
      var _this = this;
      this.$('.columns.weekdays > li').each(function(i, elem) {
        if (_this.model.weekdaysHash[i] === true) {
          return $(elem).addClass('checked');
        } else {
          return $(elem).removeClass('checked');
        }
      });
      this.$('.resource-need-check')[0].checked = this.checked();
      ovivo.desktop.resources.skills.def.done(_.bind(this.renderSkill, this));
      ovivo.desktop.resources.primaryDepartments.def.done(_.bind(this.renderPD, this));
      return ovivo.desktop.resources.templates.def.done(_.bind(this.renderTemplates, this));
    },
    initialize: function() {
      var _this = this;
      this.proxyCall('initialize', arguments);
      this.model.on('change:templates', function() {
        return _this.render();
      });
      this.weekDays = this.$('ul.weekdays');
      return true;
    }
  });
});
