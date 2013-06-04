define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'table'

    template: Handlebars.templates['periodBlockWeek']
    groupTemplate: Handlebars.templates['periodBlockWeek_group']

    preventChangeRender: true

    events: {}

    processClick: () ->
      window.a = @model.eventUsers

    getEmployeeHours: (num) ->
      _val = ((@resourceNeed().endValue() - @resourceNeed().startValue()) / 60 * num)

      if ((_val * 100 - Math.floor(_val * 100)) isnt 0)
        _val = parseFloat _val.toFixed 2

      "#{_val}h"

    _renderSkill: () ->
      @model.set 'skill_name', ovivo.desktop.resources.skills.get(@skill()).name()

    _processNum_employees: () ->
      @model.set 'total_hours', @getEmployeeHours @num_employees()

    _processStart_time: () ->
      @model.set 'total_hours', @getEmployeeHours @num_employees()

    _processEnd_time: () ->
      @model.set 'total_hours', @getEmployeeHours @num_employees()

    postRender: () ->
      @header = @$ '.header .inner'
      @content = @$ '.content .inner'
      @footer = @$ '.footer .inner'

      @employees = @$ '.content .employees'

      @emptySlots = @$ '.content div.empty'

      @header.on 'click', _.bind @processClick, @

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

    updateEventsHanlder: () ->
      @model.refreshEvents()

    processEmptySlots: () ->
      if @empty_slots() <= 0
        @emptySlots.hide()

      else
        @emptySlots.show()

      true
      
    _updateMatchedValues: (value) ->
      @renderDef.done () => 
        @model.set 'matched_employees', value
        @model.set 'matched_hours', @getEmployeeHours value
        @model.set 'empty_slots', @num_employees() - value

    _setInitialValues: () ->
      ovivo.desktop.resources.skills.def.done _.bind @_renderSkill, @

      @_processNum_employees()

    _attachHandlers: () ->
      @model.off 'rendered', @_attachHandlers

      @listenTo @resourceNeed(), 'change', @changeHanlder

      @listenTo @resourceNeed(), 'change:start_time', @updateEventsHanlder
      @listenTo @resourceNeed(), 'change:end_time', @updateEventsHanlder
      @listenTo @resourceNeed(), 'change:skill', @updateEventsHanlder

      @model.on 'change', @changeHanlder, @
      @model.on 'change:empty_slots', @processEmptySlots, @

      @_setInitialValues()

    _detachHandlers: () ->
      @stopListening @resourceNeed(), 'change', @changeHanlder
      @stopListening @resourceNeed(), 'change:start_time', @updateEventsHanlder
      @stopListening @resourceNeed(), 'change:end_time', @updateEventsHanlder
      @stopListening @resourceNeed(), 'change:skill', @updateEventsHanlder

      @model.off 'change', @changeHanlder
      @model.off 'change:empty_slots', @processEmptySlots

    _processRemove: () ->
      @header.remove()
      @content.remove()
      @footer.remove()

      @_detachHandlers()

    addEventUser: (eventUser) ->
      _i = @model.eventUsers.indexOf eventUser

      if _i is (@model.eventUsers.length - 1)
        @renderDef.done () => @employees.append eventUser.view.el

      else
        @renderDef.done () => @model.eventUsers.at(_i + 1).view.$el.before eventUser.view.el

      true

    initialize: () ->
      @model.eventUsers.on 'add', @addEventUser, @

      @renderDef = new $.Deferred()
      @renderDef.done () => @_attachHandlers()

      @proxyCall 'initialize', arguments

      true