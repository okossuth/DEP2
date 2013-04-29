define [
  'models/resources/ResourceBase',

  'views/resources/Inactivity'
  'views/resources/InactivityEdit',

  'ovivo'
], (ResourceBase, View, EditView) ->
  ResourceBase.extend
    typeName: 'inactivity'

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

    processRange: (start, end) ->
      _arr = []

      _start = new Date Date.parse @start()
      _end = new Date Date.parse @end()

      if _start > start then start = _start
      if _end < end then end = _end

      _i = new Date start

      while _i <= end
        _arr.push
          date: new Date _i
          model: @

        _i.setDate _i.getDate() + 1

      _arr

    initialize: (attrs, options) ->
      @View = View

      @on 'change', @processChange, @

      @proxyCall 'initialize', arguments

      @editView = new EditView
        model: @

      true