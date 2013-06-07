define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-help'

    events: () -> _.extend {}, PageBase.prototype.events, {}

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: (type) ->
      @proxyCall 'transitionComplete', arguments

      if (type is 'enter') and (@loaded is false)
        @iframe.src = ovivo.config.HELP_URL

      true

    iframeLoad: () ->
      @loaded = true

    initialize: () ->
      @loaded = false

      @iframe = @$('iframe')[0]

      @iframe.onload = _.bind @iframeLoad, @

      @proxyCall 'initialize', arguments

      true