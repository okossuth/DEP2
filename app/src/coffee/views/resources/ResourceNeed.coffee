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
      ovivo.desktop.popups.editPopupResourceNeed.edit @model

    available: () -> if @model.available() is true then gettext('Available') else gettext('Unavailable')

    postRender: () ->

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