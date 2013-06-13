define [
  'models/period/ResourceNeedWeek',

  'collections/period/GroupSectionsBase',

  'ovivo'
], (Model, GroupSectionsBase) ->
  Backbone.Collection.extend _.extend {}, GroupSectionsBase,
    model: Model

    initialize: () ->
      
      true