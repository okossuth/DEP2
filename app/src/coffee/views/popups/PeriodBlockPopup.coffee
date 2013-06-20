define [
  'views/popups/Popup',

  'ovivo'
], (Popup) ->
  Popup.extend
    el: '.popup-period-block'

    events: _.extend {}, Popup.prototype.events, {}

    template: Handlebars.templates['periodBlock']

    render: (obj) ->
      @$('.groups').html @template obj

    initialize: () ->
      @_initialize()

      true