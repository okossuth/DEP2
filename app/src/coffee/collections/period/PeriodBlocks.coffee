define [
  'collections/period/Blocks',
  
  'models/period/PeriodBlock',

  '_common/CachableCollection',

  'ovivo'
], (Blocks, Model, CachableCollection) ->
  Blocks.extend _.extend {}, CachableCollection.get(['skill', 'groups', 'date']),
    model: Model

    initialize: () ->
      @_initialize()

      true