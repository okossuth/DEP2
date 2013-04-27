define [
  'ovivo'
], () ->
  tagName: 'li'

  show: () -> @$el.removeClass 'hide'
  hide: () -> @$el.addClass 'hide'

  removeLoading: () ->
    @$('.overlay').remove()

  loaderUrl: () -> ovivo.config.LOADER_URL

  postRender: () -> 
    @dayElements = @$('.days-container .week-row > td')

    @hide()