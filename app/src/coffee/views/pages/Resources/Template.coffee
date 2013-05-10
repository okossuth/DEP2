define [
  'views/pages/PageBase',

  '_common/ResourceEditCommon',

  'ovivo'
], (PageBase, ResourceEditCommon) ->
  _resourceEditCommon = ResourceEditCommon.get {}

  PageBase.extend _.extend {}, _resourceEditCommon,
    el: '.page.page-resources .content-template'

    name: 'template'

    events: _.extend {}, _resourceEditCommon.events, {}

    fields: ['name', 'repeat', 'resource_needs', 'primary_department']

    primaryDepartmentsTemplate: Handlebars.templates['primaryDepartments']
    resourceNeedsTemplate: Handlebars.templates['resourceNeeds']

    primaryDepartments: () -> _.compact _.map ovivo.desktop.resources.groups.tree, (elem) -> if elem.groups.length > 0 then elem.pd else undefined
    resourceNeeds: () -> ovivo.desktop.resources.resourceNeeds.map (model) -> model

    resourceNeedsProcessor: (value) ->
      _.map value, (resourceNeed) -> parseInt resourceNeed

    types: () ->
      'name': String
      'repeat': Number
      'resource_needs': @resourceNeedsProcessor
      'primary_department': Number

    initCreateMode: () ->
      _resourceEditCommon.initCreateMode.call @

      @page.showElements 'template', '.create-mode'
      @page.hideElements 'template', '.edit-mode'

    initEditMode: () ->
      _resourceEditCommon.initEditMode.call @

      @page.showElements 'template', '.edit-mode'
      @page.hideElements 'template', '.create-mode'

    createNew: () ->
      @setModel new @collection.model
        name: ''
        repeat: 1
        resource_needs: []
        primary_department: ovivo.desktop.resources.primaryDepartments.at(0)?.pk()

      @initCreateMode()

    processResourceNeeds: () ->
      _select = @$('.property-value-resource_needs')

      _select.children().remove()

      _select.append $(@resourceNeedsTemplate @).children()

    processPD: () ->
      @$('.property-value-primary_department').append $(@primaryDepartmentsTemplate @).children()

    close: () ->
      @page.showSubView 'periods'

      @page.subViews.templates.removeHighlight()

    initialize: () ->
      @types = @types()
      @collection = ovivo.desktop.resources.templates

      _resourceNeedsProcessor = _.bind @processResourceNeeds, @

      @on 'action:add', @add, @
      @on 'action:delete', @delete, @

      ovivo.desktop.resources.resourceNeeds.def.done _resourceNeedsProcessor
      ovivo.desktop.resources.groups.on 'tree-ready', @processPD, @

      ovivo.desktop.resources.resourceNeeds.def.done () =>
        ovivo.desktop.resources.resourceNeeds.on 'add', _resourceNeedsProcessor
        ovivo.desktop.resources.resourceNeeds.on 'change', _resourceNeedsProcessor
        ovivo.desktop.resources.resourceNeeds.on 'remove', _resourceNeedsProcessor

      true