define [
  'models/PeriodBlock',

  '_common/CachableCollection',

  'ovivo'
], (Model, CachableCollection) ->
  _PeriodBlocks = Backbone.Collection.extend _.extend {}, CachableCollection.get(['skill']),
    model: Model

    initialize: () ->
      @initCacheProcessors()

      true

  _PeriodBlocks.create = (data) ->
    _models = _.map data, (obj) -> _.extend obj,
      start_time: obj.model.start_time()
      end_time: obj.model.end_time()
      skill: obj.model.skill()
      employee_type: obj.model.skill()
      num_employees: obj.model.num_employees()
      pk: obj.model.pk()

    _blocks = new _PeriodBlocks()

    _blocks.add _models

    _blocks

  _PeriodBlocks