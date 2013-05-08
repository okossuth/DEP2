define [
  'models/resources/Event',

  'ovivo'
], (Event) ->
  _Router = Backbone.Router.extend
    routes:
      'events/:pk/': 'showEvent'

    showEvent: (pk) ->
      _model = ovivo.desktop.resources.events.get pk

      _def = do () ->
        if _model is undefined
          _model = new Event
            pk: pk

          _model.url = "#{ovivo.config.API_URL_PREFIX}users/#{ovivo.config.USER_ID}/events/#{pk}/"

          _model.fetch
            fetching: true

        else true

      $.when(_def).then () ->
        ovivo.desktop.resources.events.add _model
        
        _model.createDetailsView()

        ovivo.desktop.pages.eventDetails.set 'event', _model

        ovivo.desktop.pages.eventDetails.view.showEl()

    initialize: () ->
      true

  new _Router()