define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'
    className: 'resource-need element'

    template: Handlebars.templates['resourceNeed']
    groupTemplate: Handlebars.templates['resourceNeed_group']

    groupsTemplate: Handlebars.templates['groupsResourceNeed']

    events:
      'mouseenter': 'processMouseEnter'
      'mouseleave': 'processMouseLeave'
      'click': 'processClick'

    processMouseEnter: () -> @model.highlight()
    processMouseLeave: () -> @model.removeHighlight()

    processClick: () ->
      ovivo.desktop.popups.editPopupResourceNeed.show()
      ovivo.desktop.popups.editPopupResourceNeed.setModel @model

    _getDateStr: (_date) ->
      if _date?
        "#{ovivo.config.DAYS[_date.getDay()].toLowerCase().slice(0, 3)} #{_date.getDate()}. #{ovivo.config.MONTHS[_date.getMonth()].toLowerCase()}"
      else ''

    start_date: () -> if (_start_date = @model.start_date())? then @_getDateStr new Date Date.parse _start_date else ''
    end_date: () -> 
      if @model.end_date() is @model.start_date() then ''
      else if (_end_date = @model.end_date())? then " – #{@_getDateStr new Date Date.parse _end_date}" else ' – \u221E'

    available: () -> if @model.available() is true then gettext('Available') else gettext('Unavailable')

    groups: () -> _.map @model.groups(), (pk) -> ovivo.desktop.resources.groups.get pk

    renderGroups: () ->
      _container = @$('ul.groups')

      _container.append $(@groupsTemplate(@)).children()

    postRender: () ->
      ovivo.desktop.resources.groups.def.done _.bind @renderGroups, @

    _checkMatch: (av_, need) ->
      _start = av_.startValue
      _end = av_.endValue

      start = need.startValue
      end = need.endValue

      (_start >= start) and (_end <= end)

    _addAvailability: (model) ->
      _el = model.getView().el
      _container = @$('li.group-' + model.group() + ' ul.availabilities')

      _container.append _el

    addAvailability: (model) ->
      if (@model.groupsHash[model.group()] is true) and (@_checkMatch model, @model)
        @rendered.done _.bind _.wrap(model, @_addAvailability), @
        
    initialize: () ->
      @model.setDeltaHours()

      @rendered = new $.Deferred()

      @on 'rendered', @_resolveDef @rendered

      @proxyCall 'initialize', arguments

      true