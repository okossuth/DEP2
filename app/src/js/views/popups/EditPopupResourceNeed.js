define(['views/popups/EditPopup', '_features/trailZero', 'ovivo'], function(EditPopup, trailZero) {
  return EditPopup.extend({
    el: '.popup-resource-need',
    fields: ['start_time', 'end_time', 'repeat', 'employee_type', 'skill', 'num_employees', 'primary_department'],
    skillsTemplate: Handlebars.templates['skills'],
    primaryDepartmentsTemplate: Handlebars.templates['primaryDepartments'],
    types: function() {
      return {
        'start_time': String,
        'end_time': String,
        'employee_type': String,
        'skill': Number,
        'primary_department': Number,
        'num_employees': Number,
        'repeat': Number
      };
    },
    modes: ['edit', 'create'],
    skills: function() {
      return ovivo.desktop.resources.skills.map(function(skill) {
        return skill;
      });
    },
    primaryDepartments: function() {
      return this.primary_departments = _.compact(_.map(ovivo.desktop.resources.groups.tree, function(elem) {
        if (elem.groups.length > 0) {
          return elem.pd;
        } else {
          return void 0;
        }
      }));
    },
    createNew: function(obj, mode) {
      var _end, _now, _ref, _ref1, _start;
      _now = Date.today();
      _now.moveToFirstDayOfMonth();
      _start = new Date(_now);
      _now.moveToLastDayOfMonth();
      _end = new Date(_now);
      return this.setModel(new this.collection.model(_.extend({
        start_time: '09:00',
        end_time: '17:00',
        employee_type: 'fulltime',
        num_employees: 1,
        weekdays: '1,2,3,4,5,6,7',
        repeat: 1,
        skill: (_ref = ovivo.desktop.resources.skills.at(0)) != null ? _ref.pk() : void 0,
        primary_department: (_ref1 = this.primary_departments[0]) != null ? _ref1.pk() : void 0
      }, obj)), mode);
    },
    processSkills: function() {
      return this.$('.property-value-skill').append($(this.skillsTemplate(this)).children());
    },
    processPD: function() {
      return this.$('.property-value-primary_department').append($(this.primaryDepartmentsTemplate(this)).children());
    },
    initialize: function() {
      this.types = this.types();
      this.collection = ovivo.desktop.resources.resourceNeeds;
      this._initialize();
      ovivo.desktop.resources.skills.def.then(_.bind(this.processSkills, this));
      ovivo.desktop.resources.groups.on('tree-ready', this.processPD, this);
      return true;
    }
  });
});
