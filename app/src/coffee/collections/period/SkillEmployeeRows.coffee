define [
  'models/period/SkillEmployeeRow',

  'ovivo'
], (Model) ->
  Backbone.Collection.extend
    model: Model

    addModel: (obj) ->
      _model = new @model obj

      @add _model

      _model

    initialize: () ->
      true