define [
  'views/resources/ResourceBase',

  'views/period/GroupSectionBase',
  'views/period/EventEmployee',

  'ovivo'
], (ResourceBase, GroupSectionBase, EventEmployee) ->
  ResourceBase.extend _.extend {}, GroupSectionBase,
    common: {}

    MIN_BLOCK_HEIGHT: 100

    tagName: 'table'
    className: 'day-blocks content employee-row'

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

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true