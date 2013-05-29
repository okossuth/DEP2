define [
  'views/popups/EditPopup',

  '_features/trailZero',

  'ovivo'
], (EditPopup, trailZero) ->
  EditPopup.extend
    el: '.popup-period'

    fields: ['start_date', 'end_date', 'groups', 'templates', 'primary_department']

    groupsTemplate: Handlebars.templates['groups']
    primaryDepartmentsTemplate: Handlebars.templates['primaryDepartments']
    templatesTemplate: Handlebars.templates['templates']

    primaryDepartments: () ->
      @primary_departments = _.compact _.map ovivo.desktop.resources.groups.tree, (elem) -> if elem.groups.length > 0 then elem.pd else undefined

    templates: () -> ovivo.desktop.resources.templates.map (model) -> model

    groupsProcessor: (value) ->
      _.map value, (group) -> parseInt group

    templatesProcessor: (value) ->
      _.map value, (template) -> parseInt template

    types: () ->
      'start_date': String
      'end_date': String
      'groups': @groupsProcessor
      'templates': @templatesProcessor
      'primary_department': Number

    modes: ['edit', 'create']

    createNew: (obj, mode) ->
      _now = Date.today()

      _now.moveToFirstDayOfMonth()
      _start = new Date _now

      _now.moveToLastDayOfMonth()
      _end = new Date _now

      @setModel (new @collection.model _.extend {
        start_date: "#{_start.getFullYear()}-#{trailZero(_start.getMonth() + 1)}-#{trailZero(_start.getDate())}"
        end_date: "#{_end.getFullYear()}-#{trailZero(_end.getMonth() + 1)}-#{trailZero(_end.getDate())}"

        groups: []
        primary_department: @primary_departments[0]?.pk()
        templates: []
      }, obj), mode

    processGroups: () ->
      @$('.property-value-groups').children().remove()
      @$('.property-value-groups').append $(@groupsTemplate { tree: ovivo.desktop.resources.groups.tree }).children()

    processTemplates: () ->
      @$('.property-value-templates').children().remove()

      @$('.property-value-templates').append $(@templatesTemplate @).children()

    processPD: () ->
      @$('.property-value-primary_department').append $(@primaryDepartmentsTemplate @).children()

    processPrimaryDepartmentChange: (model) ->
      @processGroups()
      @processTemplates()

      _pd = model.primary_department()

      ovivo.desktop.resources.primaryDepartments.each (pd) ->
        if pd.id isnt _pd then @$(".options-pd-#{pd.id}").remove()

      @$('.property-value-templates').val model.templates()
      @$('.property-value-groups').val model.groups()

    processModelChange: do ->
      _attachHanlders = (model) ->
        model.on 'change:primary_department', @processPrimaryDepartmentChange, @

      _detachHanlders = (model) ->
        model.off 'change:primary_department', @processPrimaryDepartmentChange

      (model) ->
        if @prevModel? then _detachHanlders.call @, @prevModel

        _attachHanlders.call @, @model

        @prevModel = @model

        @processPrimaryDepartmentChange @model

    initialize: () ->
      @types = @types()
      @collection = ovivo.desktop.resources.periods

      @$('.datepicker').pickadate
        format: 'yyyy-mm-dd'
        formatSubmit: 'yyyy-mm-dd'
        firstDay: 1

      @_initialize()

      @on 'change:model', @processModelChange, @

      ovivo.desktop.resources.groups.on 'tree-ready', @processGroups, @
      ovivo.desktop.resources.groups.on 'tree-ready', @processPD, @

      ovivo.desktop.resources.templates.def.done () =>
        @processTemplates()

        ovivo.desktop.resources.templates.on 'add', @processTemplates, @
        ovivo.desktop.resources.templates.on 'remove', @processTemplates, @
        ovivo.desktop.resources.templates.on 'change:name', @processTemplates, @
        ovivo.desktop.resources.templates.on 'change:primary_department', @processTemplates, @

      true
