define [
  'models/period/PeriodGroup',

  'collections/period/GroupSectionsBase',

  'ovivo'
], (Model, GroupSectionsBase) ->
  Backbone.Collection.extend _.extend {}, GroupSectionsBase,
    model: Model

    initialize: () ->
      @innerCollectionName = 'timeGroups'
      
      true