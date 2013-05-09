define [
  'views/popups/EditPopup',

  '_features/trailZero',

  'ovivo'
], (EditPopup, trailZero) ->
  EditPopup.extend
    el: '.popup-resource-need'

    fields: ['start_time', 'end_time', 'employee_type', 'skill', 'num_employees']

    skillsTemplate: Handlebars.templates['skills']
    groupsTemplate: Handlebars.templates['groups']

    groupsProcessor: (value) ->
      _.map value, (group) -> parseInt group

    types: () ->
      'start_time': String
      'end_time': String
      'employee_type': String
      'skill': Number
      'num_employees': Number

    skills: () -> ovivo.desktop.resources.skills.map (skill) -> skill

    createNew: () ->
      _now = Date.today()

      _now.moveToFirstDayOfMonth()
      _start = new Date _now

      _now.moveToLastDayOfMonth()
      _end = new Date _now

      @setModel new @collection.model
        start_time: '09:00'
        end_time: '17:00'
        employee_type: 'fulltime'
        num_employees: 1
        weekdays: '1,2,3,4,5,6,7'
        skill: ovivo.desktop.resources.skills.at(0)?.pk()

      @initEditMode()

    processSkills: () ->
      @$('.property-value-skill').append $(@skillsTemplate @).children()

    initialize: () ->
      @types = @types()
      @collection = ovivo.desktop.resources.resourceNeeds

      # @$('.datepicker').pickadate
      #   format: 'yyyy-mm-dd'
      #   formatSubmit: 'yyyy-mm-dd'
      #   firstDay: 1

      @_initialize()

      ovivo.desktop.resources.skills.def.then _.bind @processSkills, @

      # ovivo.desktop.resources.groups.on 'tree-ready', @processGroups, @

      true
