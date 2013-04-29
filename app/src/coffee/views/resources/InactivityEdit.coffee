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
      ovivo.desktop.popups.editPopupTimeoff.show()
      ovivo.desktop.popups.editPopupTimeoff.setModel @model

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

    isReason: () -> (_reason = @reason())? and (_reason isnt '')

    initialize: () ->
      @proxyCall 'initialize', arguments

      true
