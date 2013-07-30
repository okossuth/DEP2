define(['views/popups/EditPopup', '_features/trailZero', 'ovivo'], function(EditPopup, trailZero) {
  return EditPopup.extend({
    el: '.popup-period',
    fields: ['start_date', 'end_date', 'groups', 'templates', 'primary_department'],
    groupsTemplate: Handlebars.templates['groups'],
    primaryDepartmentsTemplate: Handlebars.templates['primaryDepartments'],
    templatesTemplate: Handlebars.templates['templates'],
    primaryDepartments: function() {
      return this.primary_departments = _.compact(_.map(ovivo.desktop.resources.groups.tree, function(elem) {
        if (elem.groups.length > 0) {
          return elem.pd;
        } else {
          return void 0;
        }
      }));
    },
    templates: function() {
      return ovivo.desktop.resources.templates.map(function(model) {
        return model;
      });
    },
    groupsProcessor: function(value) {
      return _.map(value, function(group) {
        return parseInt(group);
      });
    },
    templatesProcessor: function(value) {
      return _.map(value, function(template) {
        return parseInt(template);
      });
    },
    types: function() {
      return {
        'start_date': String,
        'end_date': String,
        'groups': this.groupsProcessor,
        'templates': this.templatesProcessor,
        'primary_department': Number
      };
    },
    modes: ['edit', 'create'],
    createNew: function(obj, mode) {
      var _end, _now, _ref, _start;
      _now = Date.today();
      _now.moveToFirstDayOfMonth();
      _start = new Date(_now);
      _now.moveToLastDayOfMonth();
      _end = new Date(_now);
      return this.setModel(new this.collection.model(_.extend({
        start_date: "" + (_start.getFullYear()) + "-" + (trailZero(_start.getMonth() + 1)) + "-" + (trailZero(_start.getDate())),
        end_date: "" + (_end.getFullYear()) + "-" + (trailZero(_end.getMonth() + 1)) + "-" + (trailZero(_end.getDate())),
        groups: [],
        primary_department: (_ref = this.primary_departments[0]) != null ? _ref.pk() : void 0,
        templates: []
      }, obj)), mode);
    },
    processGroups: function() {
      this.$('.property-value-groups').children().remove();
      return this.$('.property-value-groups').append($(this.groupsTemplate({
        tree: ovivo.desktop.resources.groups.tree
      })).children());
    },
    processTemplates: function() {
      this.$('.property-value-templates').children().remove();
      return this.$('.property-value-templates').append($(this.templatesTemplate(this)).children());
    },
    processPD: function() {
      return this.$('.property-value-primary_department').append($(this.primaryDepartmentsTemplate(this)).children());
    },
    processPrimaryDepartmentChange: function(model) {
      var _pd;
      this.processGroups();
      this.processTemplates();
      _pd = model.primary_department();
      ovivo.desktop.resources.primaryDepartments.each(function(pd) {
        if (pd.id !== _pd) {
          return this.$(".options-pd-" + pd.id).remove();
        }
      });
      this.$('.property-value-templates').val(model.templates());
      return this.$('.property-value-groups').val(model.groups());
    },
    processModelChange: (function() {
      var _attachHanlders, _detachHanlders;
      _attachHanlders = function(model) {
        return model.on('change:primary_department', this.processPrimaryDepartmentChange, this);
      };
      _detachHanlders = function(model) {
        return model.off('change:primary_department', this.processPrimaryDepartmentChange);
      };
      return function(model) {
        if (this.prevModel != null) {
          _detachHanlders.call(this, this.prevModel);
        }
        _attachHanlders.call(this, this.model);
        this.prevModel = this.model;
        return this.processPrimaryDepartmentChange(this.model);
      };
    })(),
    initialize: function() {
      var _this = this;
      this.types = this.types();
      this.collection = ovivo.desktop.resources.periods;
      this.$('.datepicker').pickadate({
        format: 'yyyy-mm-dd',
        formatSubmit: 'yyyy-mm-dd',
        firstDay: 1
      });
      this._initialize();
      this.on('change:model', this.processModelChange, this);
      ovivo.desktop.resources.groups.on('tree-ready', this.processGroups, this);
      ovivo.desktop.resources.groups.on('tree-ready', this.processPD, this);
      ovivo.desktop.resources.templates.def.done(function() {
        _this.processTemplates();
        ovivo.desktop.resources.templates.on('add', _this.processTemplates, _this);
        ovivo.desktop.resources.templates.on('remove', _this.processTemplates, _this);
        ovivo.desktop.resources.templates.on('change:name', _this.processTemplates, _this);
        return ovivo.desktop.resources.templates.on('change:primary_department', _this.processTemplates, _this);
      });
      return true;
    }
  });
});
