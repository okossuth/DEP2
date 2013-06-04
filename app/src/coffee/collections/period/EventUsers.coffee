define [
  '_common/CachableCollection',

  'models/period/EventUser',

  'ovivo'
], (CachableCollection, Model) ->
  Backbone.Collection.extend _.extend {}, CachableCollection.get(['pk', 'type']),
    model: Model

    comparator: do ->
      _order =
        'closed': 1
        'open-responses': 2
        'open': 3

      (model) -> "#{_order[model.type()]}-#{model.name()}"

    initialize: () ->
      @initCacheProcessors()

      true