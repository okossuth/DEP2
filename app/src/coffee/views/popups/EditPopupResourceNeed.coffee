define [
  'views/popups/EditPopup',

  '_features/trailZero',

  'ovivo'
], (EditPopup, trailZero) ->
  EditPopup.extend
    el: '.popup-resource-need'

    fields: ['start_time', 'end_time', 'employee_type', 'skill', 'num_employees', 'primary_department']

    skillsTemplate: Handlebars.templates['skills']
    primaryDepartmentsTemplate: Handlebars.templates['primaryDepartments']

    types: () ->
      'start_time': String
      'end_time': String
      'employee_type': String
      'skill': Number
      'primary_department': Number
      'num_employees': Number

    modes: ['edit', 'create']

    skills: () -> ovivo.desktop.resources.skills.map (skill) -> skill
    primaryDepartments: () ->
      @primary_departments = _.compact _.map ovivo.desktop.resources.groups.tree, (elem) -> if elem.groups.length > 0 then elem.pd else undefined

    createNew: (obj, mode) ->
      _now = Date.today()

      _now.moveToFirstDayOfMonth()
      _start = new Date _now

      _now.moveToLastDayOfMonth()
      _end = new Date _now

      @setModel (new @collection.model _.extend {
        start_time: '09:00'
        end_time: '17:00'
        employee_type: 'fulltime'
        num_employees: 1
        weekdays: '1,2,3,4,5,6,7'
        skill: ovivo.desktop.resources.skills.at(0)?.pk()
        primary_department: @primary_departments[0]?.pk()
      }, obj), mode

    processSkills: () ->
      @$('.property-value-skill').append $(@skillsTemplate @).children()

    processPD: () ->
      @$('.property-value-primary_department').append $(@primaryDepartmentsTemplate @).children()

    initialize: () ->
      @types = @types()
      @collection = ovivo.desktop.resources.resourceNeeds

      @_initialize()

      ovivo.desktop.resources.skills.def.then _.bind @processSkills, @
      ovivo.desktop.resources.groups.on 'tree-ready', @processPD, @

      true
