define [
  'views/resources/ResourceBase',

  'views/period/GroupSectionBase',

  'ovivo'
], (ResourceBase, GroupSectionBase) ->
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

    addBlock: (block) ->

    _renderSkill: () ->
      @$('.skill-name').html ovivo.desktop.resources.skills.get(@pk()).name()

    postRender: () ->
      @header = @$('.day-blocks.header')[0]
      @employeeRows = @$('.employee-rows')

      ovivo.desktop.resources.skills.def.done _.bind @_renderSkill, @

      @addEmployeeRows @model.skillEmployeeRows.map (t) => t

      @model.skillEmployeeRows.on 'add', @addEmployeeRows, @

      @renderDef.resolve()

    addEmployeeRows: (employeeRows) ->
      @_addViewSorted @employeeRows, @model.skillEmployeeRows, employeeRows

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true