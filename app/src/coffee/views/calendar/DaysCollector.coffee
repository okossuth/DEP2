define [
  'ovivo'
], () ->
  tagName: 'li'

  show: () -> @$el.removeClass 'hide'
  hide: () -> @$el.addClass 'hide'

  postRender: () -> 
    @dayElements = @$('.days-container .week-row > td')

    @hide()