define [
  'views/popups/EditPopup',

  '_features/trailZero',

  'ovivo'
], (EditPopup, trailZero) ->
  EditPopup.extend
    el: '.popup-template'

    fields: ['name', 'resource_needs']

    resourceNeedsTemplate: Handlebars.templates['resourceNeeds']

    resourceNeeds: () -> ovivo.desktop.resources.resourceNeeds.map (model) -> model

    resourceNeedsProcessor: (value) ->
      _.map value, (resourceNeed) -> parseInt resourceNeed

    types: () ->
      'name': String
      'repeat': Number
      'resource_needs': @resourceNeedsProcessor

    createNew: () ->
      @setModel new @collection.model
        name: ''
        repeat: 1
        resource_needs: []

      @initCreateMode()

    processResourceNeeds: () ->
      _select = @$('.property-value-resource_needs')

      _select.children().remove()

      _select.append $(@resourceNeedsTemplate @).children()

    initialize: () ->
      @types = @types()
      @collection = ovivo.desktop.resources.templates

      @_initialize()

      _resourceNeedsProcessor = _.bind @processResourceNeeds, @

      ovivo.desktop.resources.resourceNeeds.def.done _resourceNeedsProcessor

      ovivo.desktop.resources.resourceNeeds.def.done () =>
        ovivo.desktop.resources.resourceNeeds.on 'add', _resourceNeedsProcessor
        ovivo.desktop.resources.resourceNeeds.on 'change', _resourceNeedsProcessor
        ovivo.desktop.resources.resourceNeeds.on 'remove', _resourceNeedsProcessor

      true
