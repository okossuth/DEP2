define [
  'models/period/ResourceNeedTimeGroup',

  'collections/period/GroupSectionBase',

  'ovivo'
], (Model, GroupSectionBase) ->
  Backbone.Collection.extend _.extend {}, GroupSectionBase,
    model: Model

    comparator: (model) -> model.startValue()

    initialize: () ->
      @innerCollectionName = 'resourceNeedWeeks'
      
      true