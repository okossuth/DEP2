define [
  'models/resources/WorkingHour',

  '_common/ResourceManagerBase',

  'ovivo'
], (Model, ResourceManagerBase) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase,
    model: Model

    url: "#{ovivo.config.API_URL_PREFIX}users/#{ovivo.config.USER_ID}/working-hours/"

    comparator: (workingHour) -> Date.parse(workingHour.start_date()).valueOf()
    
    initialize: () ->
      @initResource()

      true