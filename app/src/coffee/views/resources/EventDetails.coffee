define [
  'views/resources/Event',

  'ovivo'
], (Event) ->
  Event.extend
    tagName: 'div'

    doNotThrottleGroup: true

    render: () ->
      _comments = @$('ul.comments').children()

      @proxyCall 'render', arguments

      @$('ul.comments').append _comments

      true

    template: Handlebars.templates['eventDetails']