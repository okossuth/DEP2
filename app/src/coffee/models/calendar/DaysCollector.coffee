define [
  'ovivo'
], () ->
  firstDate: () -> @_firstDate
  
  show: () -> @view.show()
  hide: () -> @view.hide()

  initDays: () -> @collection.days.initElements @view.dayElements, @days

  _initialize: (attrs, options) ->
    @on 'rendered', @initDays, @

    true