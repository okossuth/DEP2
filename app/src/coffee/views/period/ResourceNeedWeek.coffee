define [
  'views/resources/ResourceBase',

  '_common/ToolsBase',

  'ovivo'
], (ResourceBase, ToolsBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'resource-need-row'

    template: Handlebars.templates['resourceNeedWeek']
    groupTemplate: Handlebars.templates['resourceNeedWeek_group']

    preventChangeRender: true

    events:
      'click .time-range': 'processClick'

    processClick: () ->
      ovivo.desktop.popups.editPopupResourceNeed.show()
      ovivo.desktop.popups.editPopupResourceNeed.edit @model.resourceNeed()

    exposeAttrs: (ToolsBase.once 'exposeAttrs', () -> _.each @model._gettersNames, (name) =>
      if name instanceof Array then name = name[0]

      if not @constructor.prototype[name]? then @constructor.prototype[name] = () -> @model[name]())

    addBlock: (block) ->
      $.when(block.view.renderDef, @renderDef).done () =>
        $(@headers.get(block.day)).append block.view.header
        $(@footers.get(block.day)).append block.view.footer
        $(@contents.get(block.day)).append block.view.content

    postRender: () ->
      @headers = @$('.day-blocks.header td.day-block')
      @contents = @$('.day-blocks.content td.day-block')
      @footers = @$('.day-blocks.footer td.day-block')

      @renderDef.resolve()

    startTimeChange: () ->
      @$('.start-time-value').html @start_time()

    endTimeChange: () ->
      @$('.end-time-value').html @end_time()

    initialize: () ->
      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      @model.resourceNeed().on 'change:start_time', @startTimeChange, @
      @model.resourceNeed().on 'change:end_time', @endTimeChange, @

      true