define [
  '_features/trailZero',
  '_features/notificationMessage',
  '_common/ToolsBase',

  'views/resources/ResourceBase',

  'ovivo'
], (trailZero, notificationMessage, ToolsBase, ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'
    className: 'event element'

    template: Handlebars.templates['event']
    groupTemplate: Handlebars.templates['event_group']

    events: 
      'click': 'processClick'
      'click .type-button': 'changeType'

    processClick: () -> @$el.toggleClass 'expanded'

    groupRenderComplete: () ->
      # ovivo.mobile.pages.list.trigger 'eventsRendered'

    group: () -> ovivo.desktop.resources.groups.get(@model.group())?.name()
    groupChainName: () -> 
      ovivo.desktop.resources.groups.get(@model.group())?.chainName()

    primaryDepartment: () -> ovivo.desktop.resources.primaryDepartments.get(ovivo.desktop.resources.groups.get(@model.group())?.primary_department())?.name()

    municipality: () -> ovivo.desktop.resources.municipalities.get(ovivo.desktop.resources.primaryDepartments.get(ovivo.desktop.resources.groups.get(@model.group())?.primary_department())?.municipality())?.name()

    isClosed: () -> @type() is 'closed'
    isOpen: () -> @type() is 'open'
    isOpenResponses: () -> @type() is 'open-responses'

    day: () -> ovivo.config.DAYS[@model.pub_date().getDay()].toLowerCase().slice(0, 1)
    date: () -> @model.pub_date().getDate()
    month: () -> ovivo.config.MONTHS[@model.pub_date().getMonth()]
    year: () -> @model.pub_date().getFullYear()
    time: () -> @model.pub_date().getHours() + ':' + @model.pub_date().getMinutes()

    creationTime: () ->
      _value = @model.pub_date()

      if _value isnt undefined
        _date = new Date Date.parse(_value)

        "#{ovivo.config.DAYS[_date.getDay()].toLowerCase().slice(0, 1)}. #{_date.getDate()}. #{ovivo.config.MONTHS[_date.getMonth()]} #{_date.getFullYear()} #{trailZero(_date.getHours())}:#{trailZero(_date.getMinutes())}"

      else ''

    changeType: (e) ->
      if @_isActual() is true then @model.switchType()

      @stopPropagation(e)

    _isActual: () ->
      _date = Date.parse @start_date()
      _now = new Date()

      _now = new Date _now.getFullYear(), _now.getMonth(), _now.getDate()

      if _now > _date then false else true

    _biddingClosed: () ->
      _date = Date.parse @start_date()
      _now = new Date()

      _now = new Date _now.getFullYear(), _now.getMonth(), _now.getDate()

      if (_now > _date) and (@type() isnt 'closed') then true else false

    postRender: () ->
      @$('.element-container').removeClass('open open-responses closed').addClass @type()

      true

    processSync: (event, events, options) ->
      _text = if event.has_applied() is true then gettext('Your bid has now been received') else gettext('Your bid has been removed')

      notificationMessage.post ovivo.desktop.pages.calendar.view.$el, _text

    initialize: () ->
      @model.setDeltaHours()

      @proxyCall 'initialize', arguments

      @model.on 'sync', @processSync, @

      @biddingClosed = @_biddingClosed()

      if (ovivo.desktop.resources.groups.def.state() isnt 'resolved') or (ovivo.desktop.resources.municipalities.def.state() isnt 'resolved') or (ovivo.desktop.resources.primaryDepartments.def.state() isnt 'resolved')
        $.when(ovivo.desktop.resources.groups.def, ovivo.desktop.resources.municipalities.def, ovivo.desktop.resources.primaryDepartments.def).then _.bind @render, @

      true
