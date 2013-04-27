define [
  'ovivo'
], () ->
  firstDate: () -> @_firstDate
  
  show: () -> @view.show()
  hide: () -> @view.hide()

  initDays: () -> @collection.days.initElements @view.dayElements, @days

  removeLoading: () -> @view.removeLoading()

  _initialize: (attrs, options) ->
    @on 'rendered', @initDays, @

    true