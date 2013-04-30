define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'
    className: 'inactivity'

    template: Handlebars.templates['inactivity']
    groupTemplate: Handlebars.templates['inactivity_group']

    _getDateStr: (_date) ->
      if _date?
        "#{ovivo.config.DAYS[_date.getDay()].toLowerCase().slice(0, 3)} #{_date.getDate()}. #{ovivo.config.MONTHS[_date.getMonth()].toLowerCase()}"
      else ''

    start: () -> if (_start = @model.start())? then @_getDateStr new Date Date.parse _start else ''
    end: () -> if (_end = @model.end())? then @_getDateStr new Date Date.parse _end else ''

    approved: () -> 
      if (_approved = @model.approved())?
        if _approved is true then gettext('Approved') else gettext('Not approved')

      else gettext('Pending')

    isReason: () -> (_reason = @reason())? and (_reason isnt '')

    postRender: () ->
      @$el.addClass @itemType

    initialize: (options) ->
      @itemType = options.itemType

      @proxyCall 'initialize', arguments

      true
