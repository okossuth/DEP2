define [
  '_features/Switcher',
  '_features/indicator',

  'views/pages/PageBase',

  '_features/notificationMessage',

  'ovivo'
], (Switcher, indicator, PageBase, notificationMessage) ->
  PageBase.extend
    el: '.page.page-feedback'

    events: () -> _.extend {}, PageBase.prototype.events,
      'click div.back-button': 'back'
      'click div.send-button': 'send'
      'keyup textarea': 'changeTextarea'

    back: () -> ovivo.mobile.pages.options.show()
    send: () ->
      if (@type isnt null) and (@text isnt '')
        indicator.start()

        @sendButton.addClass 'disabled'

        $.ajax
          type: 'POST'
          data: JSON.stringify({ category: @type, feedback: @text })

          contentType: 'application/json'

          url: '/api/1.0/feedback/'
          success: (_.bind @processSuccess, @)
          error: (_.bind @processError, @)

      true

    processSuccess: () ->
      indicator.success()

      ovivo.desktop.pages.calendar.show()

      notificationMessage.post ovivo.desktop.pages.calendar.view.$el, 'Thanks for your feedback'

      true

    processError: () ->
      @sendButton.removeClass 'disabled'

      indicator.error()

      true

    changeTextarea: () ->
      @text = @$('textarea').val()

      if @text is '' then @sendButton.addClass 'disabled'
      else if @type isnt null then @sendButton.removeClass 'disabled'

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      @clear()

      true

    processType: (value) -> 
      @type = value

      if @text isnt '' then @sendButton.removeClass 'disabled'

    clear: () ->
      @typeSwitcher.clear()
      @type = null

      @$('textarea').val('')
      @text = ''

      @sendButton.addClass 'disabled'

    initialize: () ->
      @proxyCall 'initialize', arguments

      @typeSwitcher = new Switcher @$('.switcher-feedback-type'), ['error', 'comment', 'suggestion']

      @typeSwitcher.on 'value', @processType, @

      @sendButton = @$('.send-button')

      @clear()

      true