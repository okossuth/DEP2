define(['views/pages/PageBase', '_common/ResourceEditCommon', 'ovivo'], function(PageBase, ResourceEditCommon) {
  var _resourceEditCommon;
  _resourceEditCommon = ResourceEditCommon.get({});
  return PageBase.extend(_.extend({}, _resourceEditCommon, {
    el: '.page.page-resources .content-template',
    name: 'template',
    events: _.extend({}, _resourceEditCommon.events, {
      'click .button-add-new': 'addNew',
      'click .resource-need-check': 'clickCheckbox'
    }),
    fields: ['name', 'resource_needs', 'primary_department', 'periods'],
    primaryDepartmentsTemplate: Handlebars.templates['primaryDepartments'],
    resourceNeedsTemplate: Handlebars.templates['resourceNeeds'],
    primaryDepartments: function() {
      return this.primary_departments = _.compact(_.map(ovivo.desktop.resources.groups.tree, function(elem) {
        if (elem.groups.length > 0) {
          return elem.pd;
        } else {
          return void 0;
        }
      }));
    },
    resourceNeeds: function() {
      return ovivo.desktop.resources.resourceNeeds.map(function(model) {
        return model;
      });
    },
    resourceNeedsProcessor: function(value) {
      return _.map(value, function(resourceNeed) {
        return parseInt(resourceNeed);
      });
    },
    types: function() {
      return {
        'name': String,
        'resource_needs': this.resourceNeedsProcessor,
        'primary_department': Number
      };
    },
    modes: ['edit', 'create'],
    addNew: function() {
      ovivo.desktop.popups.editPopupResourceNeed.show();
      ovivo.desktop.popups.editPopupResourceNeed.create();
      return true;
    },
    resourceNeedRegExp: /resource-need-template-(.+)/,
    clickCheckbox: function(e) {
      var _arr, _el, _i, _id, _model, _val;
      _el = $(e.target).closest('.resource-need')[0];
      if (_el == null) {
        return true;
      }
      _id = parseInt(this.resourceNeedRegExp.exec(_el.id)[1]);
      _model = ovivo.desktop.resources.resourceNeeds.get(_id);
      _arr = this.model.resource_needs();
      _val = [];
      _.each(_arr, function(el) {
        return _val.push(el);
      });
      if (e.target.checked === true) {
        _val.push(_id);
        if (_model != null) {
          _model.set('checked', true);
        }
      } else {
        _i = _val.indexOf(_id);
        if (_i !== -1) {
          _val.splice(_i, 1);
        } else {
          return true;
        }
        if (_model != null) {
          _model.set('checked', false);
        }
      }
      return this.model.set('resource_needs', _val);
    },
    setResourceNeedsCheckboxes: function(model) {
      this.$('.resource-need-check').each(function(i, el) {
        el.checked = false;
        return true;
      });
      ovivo.desktop.resources.resourceNeeds.each(function(model) {
        return model.set('checked', false);
      });
      return _.each(model.resource_needs(), function(need) {
        var _ref;
        ovivo.desktop.resources.resourceNeeds.get(need).set('checked', true);
        return (_ref = $("#resource-need-template-" + need + " .resource-need-check")[0]) != null ? _ref.checked = true : void 0;
      });
    },
    initMode: function(name) {
      _resourceEditCommon.initMode.call(this, name);
      if (name === 'create') {
        this.page.showElements('template', '.create-mode');
        this.page.hideElements('template', '.edit-mode');
      }
      if (name === 'edit') {
        this.page.subViews.templates.removeHighlight();
        this.page.showElements('template', '.edit-mode');
        return this.page.hideElements('template', '.create-mode');
      }
    },
    createNew: function(obj, mode) {
      var _ref;
      return this.setModel(new this.collection.model(_.extend({
        name: '',
        resource_needs: [],
        primary_department: (_ref = this.primary_departments[0]) != null ? _ref.pk() : void 0
      }, obj)), mode);
    },
    processPD: function() {
      return this.$('.property-value-primary_department').append($(this.primaryDepartmentsTemplate(this)).children());
    },
    close: function() {
      this.page.showSubView('periods');
      return this.page.subViews.templates.removeHighlight();
    },
    addResourceNeed: function(model) {
      var _view;
      _view = model.getEditView('templateView');
      _view.$el.addClass('show-checkbox');
      _view.el.id = "resource-need-template-" + _view.model.id;
      this.processPrimaryDepartmentChange(this.model);
      return this.resourceNeeds.append(_view.el);
    },
    removeResourceNeed: function() {
      return this.processPrimaryDepartmentChange(this.model);
    },
    changeResourceNeed: function(model) {
      return this.processPrimaryDepartmentChange(this.model);
    },
    processPrimaryDepartmentChange: function(model) {
      var _hide, _needs, _show;
      if (model == null) {
        return;
      }
      _needs = ovivo.desktop.resources.resourceNeeds.getBy('primary_department', model.primary_department());
      _show = _.pluck(_needs, 'templateView');
      _hide = _.without.apply(_, [_.pluck(ovivo.desktop.resources.resourceNeeds.models, 'templateView')].concat(_show));
      _.each(_show, function(view) {
        return view.show();
      });
      _.each(_hide, function(view) {
        return view.hide();
      });
      if (_show.length === 0) {
        return this.empty.show();
      } else {
        return this.empty.hide();
      }
    },
    processModelChange: (function() {
      var _attachHanlders, _detachHanlders;
      _attachHanlders = function(model) {
        model.on('change:primary_department', this.processPrimaryDepartmentChange, this);
        return model.on('change:resource_needs', this.setResourceNeedsCheckboxes, this);
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
        this.processPrimaryDepartmentChange(this.model);
        return this.setResourceNeedsCheckboxes(this.model);
      };
    })(),
    initialize: function() {
      this.types = this.types();
      this.collection = ovivo.desktop.resources.templates;
      this.on('action:add', this.add, this);
      this.on('action:save', this.save, this);
      this.on('action:delete', this["delete"], this);
      this.on('change:model', this.processModelChange, this);
      this.resourceNeeds = this.$('ul.resource-needs');
      this.empty = this.$('ul.resource-needs li.empty');
      ovivo.desktop.resources.groups.on('tree-ready', this.processPD, this);
      ovivo.desktop.resources.resourceNeeds.on('add', this.addResourceNeed, this);
      ovivo.desktop.resources.resourceNeeds.on('remove', this.removeResourceNeed, this);
      ovivo.desktop.resources.resourceNeeds.on('change:primary_department', this.changeResourceNeed, this);
      return true;
    }
  }));
});
