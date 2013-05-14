define [
  'views/PeriodMonth'

  'ovivo'
], (View) ->
  Backbone.Model.extend
    idAttribute: 'key'

    month: () -> @get 'month'
    year: () -> @get 'year'

    addPeriod: (model) -> @view.addPeriod model

    initialize: () ->
      @set 'key', "#{@year()}-#{@month()}"

      @view = new View
        model: @

      true