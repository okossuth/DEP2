define [
  'views/resources/ResourceBase',

  'views/period/GroupSectionBase',
  'views/period/EventEmployee',
  'views/period/WorkingHourEmployee',

  'ovivo'
], (ResourceBase, GroupSectionBase, EventEmployee, WorkingHourEmployee) ->
  ResourceBase.extend _.extend {}, GroupSectionBase,
    common: {}

    MIN_BLOCK_HEIGHT: 100

    tagName: 'div'
    className: 'table-container content'

    template: Handlebars.templates['employeeRowSkill']
    groupTemplate: Handlebars.templates['employeeRowSkill_group']

    preventChangeRender: true

    events:
      'click': 'processClick'

    processClick: () ->

    clearScroll: () ->

    processScroll: (obj, val) ->

    postRender: () ->
      @eventContainers = @$('td.day-block ul.activities')
      @renderDef.resolve()

    addEvent: (event, obj) ->
      _view = new EventEmployee { model: event }, obj

      @renderDef.done () => $(@eventContainers.get(event.day)).append _view.el

      _view

    addHoursBlock: (block) ->
      _view = new WorkingHourEmployee { model: block.workingHour() },
        block: block

      @renderDef.done () => $(@eventContainers.get(block.day)).append _view.el

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true