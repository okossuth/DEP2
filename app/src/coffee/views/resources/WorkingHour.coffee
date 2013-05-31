define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'
    className: 'working-hour element'

    template: Handlebars.templates['workingHour']
    groupTemplate: Handlebars.templates['workingHour_group']

    events:
      'mouseenter': 'processMouseEnter'
      'mouseleave': 'processMouseLeave'
      'click': 'processClick'

    processMouseEnter: () -> @model.highlight()
    processMouseLeave: () -> @model.removeHighlight()

    processClick: (e) ->
      if @model.isSingle() is true
        _mode = 'edit-single'

      else
        _mode = 'edit'

      ovivo.desktop.pages.editWorkingHours.view.showEl()
      ovivo.desktop.pages.editWorkingHours.view.edit @model, _mode

      e.stopPropagation()

      false

    _getDateStr: (_date) ->
      if _date?
        "#{ovivo.config.DAYS[_date.getDay()].toLowerCase().slice(0, 3)} #{_date.getDate()}. #{ovivo.config.MONTHS[_date.getMonth()].toLowerCase()}"
      else ''

    start_date: () -> if (_start_date = @model.start_date())? then @_getDateStr new Date Date.parse _start_date else ''
    end_date: () -> 
      if @model.end_date() is @model.start_date() then ''
      else if (_end_date = @model.end_date())? then " – #{@_getDateStr new Date Date.parse _end_date}" else ' – \u221E'

    available: () -> if @model.available() is true then gettext('Available') else gettext('Unavailable')

    postRender: () ->
      _className = if @model.available() is true then 'available' else 'unavailable'

      @$('.element-container').removeClass('available unavailable').addClass _className

    initialize: () ->
      @model.setDeltaHours()

      @proxyCall 'initialize', arguments

      true
