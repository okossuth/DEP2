define [
  'views/resources/ResourceBase',

  '_common/ToolsBase',

  'ovivo'
], (ResourceBase, ToolsBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'table'

    template: Handlebars.templates['periodBlockWeek']
    groupTemplate: Handlebars.templates['periodBlockWeek_group']

    preventChangeRender: true

    events: {}

    exposeAttrs: (ToolsBase.once 'exposeAttrs', () -> _.each @model._gettersNames, (name) =>
      if name instanceof Array then name = name[0]

      if not @constructor.prototype[name]? then @constructor.prototype[name] = () -> @model[name]())

    getTotalHours: () ->
      _val = ((@resourceNeed().endValue() - @resourceNeed().startValue()) / 60 * @num_employees())

      if ((_val * 100 - Math.floor(_val * 100)) isnt 0)
        _val = parseFloat _val.toFixed 2

      "#{_val}h"

    _renderSkill: () ->
      @model.set 'skill_name', ovivo.desktop.resources.skills.get(@skill()).name()

    _processNum_employees: () ->
      @model.set 'total_hours', @getTotalHours()

    _processStart_time: () ->
      @model.set 'total_hours', @getTotalHours()

    _processEnd_time: () ->
      @model.set 'total_hours', @getTotalHours()

    postRender: () ->
      @header = @$ '.header .inner'
      @content = @$ '.content .inner'
      @footer = @$ '.footer .inner'

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

        _sel = ".#{field}-value"

        if not (_el = @header.find(_sel)[0])?
          if not (_el = @content.find(_sel)[0])?
            if not (_el = @footer.find(_sel)[0])? 
              return

        $(_el).html @[field]()

    _setInitialValues: () ->
      ovivo.desktop.resources.skills.def.done _.bind @_renderSkill, @

      @_processNum_employees()

    _attachHandlers: () ->
      @model.off 'rendered', @_attachHandlers

      @listenTo @resourceNeed(), 'change', @changeHanlder

      @model.on 'change', @changeHanlder, @

      @_setInitialValues()

    _detachHandlers: () ->
      @stopListening @resourceNeed(), 'change', @changeHanlder

      @model.off 'change', @changeHanlder

    _processRemove: () ->
      @header.remove()
      @content.remove()
      @footer.remove()

      @_detachHandlers()

    initialize: () ->
      @model.on 'rendered', @_attachHandlers, @

      @renderDef = new $.Deferred()

      @proxyCall 'initialize', arguments

      true