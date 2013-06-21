define [
  'collections/period/Blocks',

  'models/period/HoursBlock',

  '_common/CachableCollection',

  'ovivo'
], (Blocks, Model, CachableCollection) ->
  Blocks.extend _.extend {}, CachableCollection.get(['pk', 'skills', 'code', 'groups', 'date']),
    model: Model

    initialize: () ->
      @_initialize()

      true