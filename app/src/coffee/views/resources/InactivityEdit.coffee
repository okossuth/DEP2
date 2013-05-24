define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}
    
    tagName: 'li'
    className: 'element inactivity'

    events:
      'click .edit-button': 'edit'
      'click .remove-button': 'processRemove'

    template: Handlebars.templates['inactivityEdit']
    groupTemplate: Handlebars.templates['inactivityEdit_group']

    edit: () -> 
      if @model.isSingle() is true
        _mode = 'edit-single'

      else
        _mode = 'edit'

      ovivo.desktop.popups.editPopupTimeoff.show()
      ovivo.desktop.popups.editPopupTimeoff.edit @model, _mode

    _getDateStr: (_date) ->
      if _date?
        "#{_date.getDate()}. #{ovivo.config.MONTHS[_date.getMonth()].toLowerCase().slice(0, 3)}"
      else ''

    start: () -> if (_start = @model.start())? then @_getDateStr new Date Date.parse _start else ''
    end: () -> if (_end = @model.end())? then @_getDateStr new Date Date.parse _end else ''

    approved: () -> 
      if (_approved = @model.approved())?
        if _approved is true then gettext('Approved') else gettext('Not approved')

      else gettext('Pending')

    postRender: () ->
      @$el.removeClass 'approved not-approved pending'

      @$el.addClass if (_approved = @model.approved())?
        if _approved is true then 'approved' else 'not-approved'

      else 'pending'

    isReason: () -> (_reason = @reason())? and (_reason isnt '')

    initialize: () ->
      @proxyCall 'initialize', arguments

      true