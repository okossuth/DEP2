define [
  'models/period/ResourceNeedWeek',

  'collections/period/GroupSectionBase',

  'ovivo'
], (Model, GroupSectionBase) ->
  Backbone.Collection.extend _.extend {}, GroupSectionBase,
    model: Model

    initialize: () ->
      
      true