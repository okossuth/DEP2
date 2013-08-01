define [
  'views/resources/Event',

  'ovivo'
], (Event) ->
  Event.extend
    tagName: 'div'

    doNotThrottleGroup: true

    events: _.extend {}, Event.prototype.events,
      'click .switcher': 'changeType'

    render: () ->
      _comments = @$('ul.comments').children()

      @proxyCall 'render', arguments

      @$('ul.comments').append _comments

      true

    template: Handlebars.templates['eventDetails']