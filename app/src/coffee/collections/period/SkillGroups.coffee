define [
  'models/period/SkillGroup',

  'collections/period/GroupSectionsBase',

  'ovivo'
], (Model, GroupSectionsBase) ->
  Backbone.Collection.extend _.extend {}, GroupSectionsBase,
    model: Model

    initialize: () ->
      
      true