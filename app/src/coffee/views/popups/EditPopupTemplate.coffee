define [
  'views/popups/EditPopup',

  '_features/trailZero',

  'ovivo'
], (EditPopup, trailZero) ->
  EditPopup.extend
    el: '.popup-template'

    fields: ['name', 'repeat', 'resource_needs']

    types: () ->
      'name': String
      'repeat': Number
      'resource_needs': String

    createNew: () ->
      @setModel new @collection.model
        name: ''
        repeat: 1
        resource_needs: []

      @initEditMode()

    initialize: () ->
      @types = @types()
      @collection = ovivo.desktop.resources.templates

      @_initialize()

      true
