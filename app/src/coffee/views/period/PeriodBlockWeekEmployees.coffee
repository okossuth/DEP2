define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'resource-need'

    template: Handlebars.templates['resourceNeedSkillGroup']
    groupTemplate: Handlebars.templates['resourceNeedSkillGroup_group']

    preventChangeRender: true

    events: {}

    postRender: () ->
      @renderDef.resolve()

    changeHanlder: (resourceNeed) ->
      _changed = _.keys resourceNeed.changed

      _.each _changed, (field) =>
        _method = "_render#{field.slice(0, 1).toUpperCase() + field.slice(1)}"
        _processMethod = "_process#{field.slice(0, 1).toUpperCase() + field.slice(1)}"

        if @[_method]?
          @[_method]()

          return

        if @[_processMethod]? then @[_processMethod]()

        if typeof (_field = @[field]) isnt 'function' then return

        @$(".#{field}-value").html _field.call @

    _attachHandlers: () ->
      @model.off 'rendered', @_attachHandlers

      @listenTo @resourceNeed(), 'change', @changeHanlder

      @model.on 'change', @changeHanlder, @

    _detachHandlers: () ->
      @stopListening @resourceNeed(), 'change', @changeHanlder

      @model.off 'change', @changeHanlder

    initialize: () ->
      @renderDef = new $.Deferred()
      @renderDef.done () => @_attachHandlers()

      @proxyCall 'initialize', arguments

      true