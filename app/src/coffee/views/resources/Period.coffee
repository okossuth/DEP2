define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'
    className: 'period'

    template: Handlebars.templates['period']
    groupTemplate: Handlebars.templates['period_group']

    events:
      'click': 'processClick'
      'click .edit-button': 'editClick'

    _getDateStr: (_date) ->
      if _date?
        "#{_date.getDate()}. #{ovivo.config.MONTHS[_date.getMonth()].toLowerCase().slice(0, 3)}"
      else ''

    start_date: () -> @_getDateStr new Date Date.parse @model.start_date()
    end_date: () -> @_getDateStr new Date Date.parse @model.end_date()

    _renderValues: (field, emptyStr, selector) ->
      _items = @[field]()
      _str = ''
      _list = @$(selector)

      if _items.length > 0
        _str = _.map(_items, (id) -> ovivo.desktop.resources[field].get(id).name()).join ', '

      else
        _str = gettext emptyStr

        _list.addClass 'empty'

      _list.html _str

    renderTemplates: () ->
      @_renderValues 'templates', 'No templates attached', '.templates-list'

    renderGroups: () ->
      @_renderValues 'groups', 'No groups attached', '.groups-list'

    renderPD: () ->
      @$('.primary_department-value').html ovivo.desktop.resources.primaryDepartments.get(@primary_department()).name()

    postRender: () ->
      ovivo.desktop.resources.templates.def.done _.bind @renderTemplates, @
      ovivo.desktop.resources.groups.def.done _.bind @renderGroups, @
      ovivo.desktop.resources.primaryDepartments.def.done _.bind @renderPD, @

    processClick: () ->
      ovivo.desktop.pages.resources.view.showSubView('timeline')

    editClick: (e) ->
      console.log @model.compile()

      ovivo.desktop.popups.editPopupPeriod.show()
      ovivo.desktop.popups.editPopupPeriod.setModel @model

      e.stopPropagation()

      false

    initialize: () ->
      @proxyCall 'initialize', arguments

      true