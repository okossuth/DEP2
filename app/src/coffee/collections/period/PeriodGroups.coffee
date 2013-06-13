define [
  'models/period/PeriodGroup',

  'collections/period/GroupSectionBase',

  'ovivo'
], (Model, GroupSectionBase) ->
  Backbone.Collection.extend _.extend {}, GroupSectionBase,
    model: Model

    initialize: () ->
      @innerCollectionName = 'timeGroups'
      
      true