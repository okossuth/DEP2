define [
  'ovivo'
], () ->
  _template = Handlebars.templates['notificationMessage']

  post: (selector, text) ->
    _message = $ _template
      text: text

    $(selector).append _message

    setTimeout (() -> _message.fadeOut(300, () -> _message.remove())), 1000