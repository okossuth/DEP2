define [
  'views/pages/PageBase',

  '_common/ResourceEditCommon',

  'ovivo'
], (PageBase, ResourceEditCommon) ->
  _resourceEditCommon = ResourceEditCommon.get {}

  PageBase.extend _.extend {}, _resourceEditCommon,
    el: '.page.page-resources .content-template'

    name: 'template'

    events: _.extend {}, _resourceEditCommon.events,
      'click .button-add-new': 'addNew'
      'click .resource-need-check': 'clickCheckbox'

    fields: ['name', 'resource_needs', 'primary_department', 'periods']

    primaryDepartmentsTemplate: Handlebars.templates['primaryDepartments']
    resourceNeedsTemplate: Handlebars.templates['resourceNeeds']

    primaryDepartments: () ->
      @primary_departments = _.compact _.map ovivo.desktop.resources.groups.tree, (elem) -> if elem.groups.length > 0 then elem.pd else undefined

    resourceNeeds: () -> ovivo.desktop.resources.resourceNeeds.map (model) -> model

    resourceNeedsProcessor: (value) ->
      _.map value, (resourceNeed) -> parseInt resourceNeed

    types: () ->
      'name': String
      'resource_needs': @resourceNeedsProcessor
      'primary_department': Number

    modes: ['edit', 'create']

    addNew: () ->
      ovivo.desktop.popups.editPopupResourceNeed.show()
      ovivo.desktop.popups.editPopupResourceNeed.create()

      true

    resourceNeedRegExp: /resource-need-template-(.+)/

    clickCheckbox: (e) ->
      _el = $(e.target).closest('.resource-need')[0]

      if not _el? then return true

      _id = parseInt @resourceNeedRegExp.exec(_el.id)[1]
      _model = ovivo.desktop.resources.resourceNeeds.get _id
      _arr = @model.resource_needs()

      _val = []
      _.each _arr, (el) -> _val.push el

      if e.target.checked is true
        _val.push _id

        _model?.set 'checked', true

      else
        _i = _val.indexOf _id
        if _i isnt -1 then _val.splice(_i, 1) else return true

        _model?.set 'checked', false

      @model.set 'resource_needs', _val

    setResourceNeedsCheckboxes: (model) ->
      @$('.resource-need-check').each (i, el) -> el.checked = false; true

      ovivo.desktop.resources.resourceNeeds.each (model) -> model.set 'checked', false

      _.each model.resource_needs(), (need) ->
        ovivo.desktop.resources.resourceNeeds.get(need).set 'checked', true

        $("#resource-need-template-#{need} .resource-need-check")[0]?.checked = true

    initMode: (name) ->
      _resourceEditCommon.initMode.call @, name

      if name is 'create'
        @page.showElements 'template', '.create-mode'
        @page.hideElements 'template', '.edit-mode'

      if name is 'edit'
        @page.subViews.templates.removeHighlight()

        @page.showElements 'template', '.edit-mode'
        @page.hideElements 'template', '.create-mode'

    createNew: (obj, mode) ->
      @setModel (new @collection.model _.extend {
        name: ''
        resource_needs: []
        primary_department: @primary_departments[0]?.pk()
      }, obj), mode

    processPD: () ->
      @$('.property-value-primary_department').append $(@primaryDepartmentsTemplate @).children()

    close: () ->
      @page.showSubView 'periods'

      @page.subViews.templates.removeHighlight()

    addResourceNeed: (model) ->
      _view = model.getEditView 'templateView'
      _view.$el.addClass 'show-checkbox'
      _view.el.id = "resource-need-template-#{_view.model.id}"

      @processPrimaryDepartmentChange @model

      @resourceNeeds.append _view.el

    removeResourceNeed: () -> @processPrimaryDepartmentChange @model

    changeResourceNeed: (model) -> @processPrimaryDepartmentChange @model

    processPrimaryDepartmentChange: (model) ->
      if not model? then return

      _needs = ovivo.desktop.resources.resourceNeeds.getBy 'primary_department', model.primary_department()

      _show = _.pluck _needs, 'templateView'
      _hide = _.without.apply _, [_.pluck(ovivo.desktop.resources.resourceNeeds.models, 'templateView')].concat _show

      _.each _show, (view) -> view.show()
      _.each _hide, (view) -> view.hide()

      if _show.length is 0 then @empty.show() else @empty.hide()

    processModelChange: do ->
      _attachHanlders = (model) ->
        model.on 'change:primary_department', @processPrimaryDepartmentChange, @
        model.on 'change:resource_needs', @setResourceNeedsCheckboxes, @

      _detachHanlders = (model) ->
        model.off 'change:primary_department', @processPrimaryDepartmentChange

      (model) ->
        if @prevModel? then _detachHanlders.call @, @prevModel

        _attachHanlders.call @, @model

        @prevModel = @model

        @processPrimaryDepartmentChange @model

        @setResourceNeedsCheckboxes @model

    initialize: () ->
      @types = @types()
      @collection = ovivo.desktop.resources.templates

      @on 'action:add', @add, @
      @on 'action:save', @save, @
      @on 'action:delete', @delete, @

      @on 'change:model', @processModelChange, @

      @resourceNeeds = @$('ul.resource-needs')
      @empty = @$('ul.resource-needs li.empty')

      ovivo.desktop.resources.groups.on 'tree-ready', @processPD, @

      ovivo.desktop.resources.resourceNeeds.on 'add', @addResourceNeed, @
      ovivo.desktop.resources.resourceNeeds.on 'remove', @removeResourceNeed, @
      ovivo.desktop.resources.resourceNeeds.on 'change:primary_department', @changeResourceNeed, @

      true