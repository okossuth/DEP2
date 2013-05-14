define [
  'ovivo'
], () ->
  Backbone.View.extend
    tagName: 'li'
    className: 'month-section'

    template: Handlebars.templates['periodMonth']

    month: () -> ovivo.config.MONTHS[@model.month()]
    year: () -> @model.year()

    addPeriod: (model) ->
      @periodsContainer.append model.view.el

    render: () ->
      _now = Date.today()

      @$el.html @template @

      if (_now.getMonth() is @model.month()) and (_now.getFullYear() is @model.year())
        @$el.addClass 'current'

      @periodsContainer = @$('ul.periods')

    initialize: () ->
      @render()

      true