define [
  'views/resources/ResourceBase',

  'views/period/GroupSectionBase',

  'ovivo'
], (ResourceBase, GroupSectionBase) ->
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
      @renderDef.resolve()

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true