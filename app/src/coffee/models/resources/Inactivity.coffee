define [
  'models/resources/ResourceBase',

  'views/resources/Inactivity'

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'start'
      'end'
      'reason'
      'approved'
      'municipality'
      'type'
      'pk'
    ]

    validate: (attrs) -> 
      if attrs.start? and attrs.end? and attrs.municipality?
        undefined

      else gettext('Params are missing')

    processChange: () -> if @id? then @save()

    initialize: (attrs, options) ->
      @View = View

      @on 'change', @processChange, @

      @proxyCall 'initialize', arguments

      true