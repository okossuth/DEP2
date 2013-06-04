define [
  'collections/period/Blocks',

  'models/period/PeriodBlock',

  '_common/CachableCollection',

  'ovivo'
], (Blocks, Model, CachableCollection) ->
  Blocks.extend _.extend {}, CachableCollection.get(['pk', 'skill', 'groups', 'date', 'code', 'dateKey']),
    model: Model

    initialize: (models, options) ->
      @View = options.View

      @_initialize()

      true