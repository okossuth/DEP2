define [
  'collections/period/Blocks',

  'models/period/HoursBlock',

  '_common/CachableCollection',

  'ovivo'
], (Blocks, Model, CachableCollection) ->
  Blocks.extend _.extend {}, CachableCollection.get(['pk', 'skills', 'user', 'code', 'group', 'groups', 'date']),
    model: Model

    initialize: () ->
      @_initialize()

      true