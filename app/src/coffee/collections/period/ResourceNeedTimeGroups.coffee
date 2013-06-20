define [
  'models/period/ResourceNeedTimeGroup',

  'collections/period/GroupSectionsBase',

  'ovivo'
], (Model, GroupSectionsBase) ->
  Backbone.Collection.extend _.extend {}, GroupSectionsBase,
    model: Model

    comparator: (model) -> model.startValue()

    initialize: () ->
      @innerCollectionName = 'resourceNeedWeeks'

      true