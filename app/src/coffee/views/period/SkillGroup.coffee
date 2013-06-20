define [
  'views/resources/ResourceBase',

  'views/period/GroupSectionBase',
  'views/period/PeriodBlockWeekEmployees'

  'ovivo'
], (ResourceBase, GroupSectionBase, PeriodBlockView) ->
  ResourceBase.extend _.extend {}, GroupSectionBase,
    common: {}

    MIN_BLOCK_HEIGHT: 100

    tagName: 'li'
    className: 'skill-group'

    template: Handlebars.templates['skillGroup']
    groupTemplate: Handlebars.templates['skillGroup_group']

    preventChangeRender: true

    events:
      'click': 'processClick'

    processClick: () ->

    clearScroll: () ->
      @_clearHeader()

      @_clearFolding()

      true

    processScroll: (obj, val) ->
      _val = Math.min (obj.height - @MIN_BLOCK_HEIGHT), val

      @_animateHeader _val, val

      if obj.last is true then return

      @_animateFolding _val, val

    addBlock: (block) -> @renderDef.done () =>
      _view = new PeriodBlockView
        model: block

      $(@headerBlocks.get(block.day)).append _view.el

    _renderSkill: () ->
      @$('.skill-name').html ovivo.desktop.resources.skills.get(@pk()).name()

    postRender: () ->
      @header = @$('.day-blocks.header')[0]
      @headerBlocks = @$('.day-blocks.header td.day-block.container ul.resource-needs')
      @employeeRows = @$('.employee-rows')

      ovivo.desktop.resources.skills.def.done _.bind @_renderSkill, @

      @renderDef.resolve()

    _renderEmployees: () ->
      @addEmployeeRows @model.skillEmployeeRows.map (t) => t

      @model.skillEmployeeRows.on 'add', @addEmployeeRows, @

    addEmployeeRows: (employeeRows) ->
      @_addViewSorted @employeeRows, @model.skillEmployeeRows, employeeRows

    initialize: () ->
      @renderDef = new $.Deferred()

      $.when(@model.employeesDef, @renderDef).done _.bind @_renderEmployees, @

      @proxyCall 'initialize', arguments

      true