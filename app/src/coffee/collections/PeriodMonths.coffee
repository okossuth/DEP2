define [
  'models/PeriodMonth',

  'ovivo'
], (Model) ->
  Backbone.Collection.extend
    model: Model

    comparator: (model) -> new Date model.year(), model.month(), 1

    addMonth: (obj) ->
      _model = new Model obj

      @add _model

      _model

    initialize: () ->

      true