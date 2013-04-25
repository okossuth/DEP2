define [
], () ->
  start: () ->
    $(document.body).addClass 'loading loading-running'

    true

  success: () ->
    $(document.body).removeClass 'loading'
    setTimeout (() -> $(document.body).removeClass 'loading-running error'), 400

    true

  errorAction: (url) ->
    $(document.body).addClass 'error'

    if typeof url is 'function' then url = url()

    true

  error: () ->
    $(document.body).addClass 'error'

    setTimeout (() -> $(document.body).removeClass 'loading'), 800
    setTimeout (() -> $(document.body).removeClass 'loading-running error'), 1200

    true