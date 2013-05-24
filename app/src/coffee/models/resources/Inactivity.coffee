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

    isSingle: () -> @start() is @end()

    validate: (attrs) -> 
      if attrs.start? and attrs.end? and attrs.municipality?
        undefined

      else gettext('Params are missing')

    processRange: (start, end) ->
      _arr = []

      _start = new Date Date.parse @start()
      _end = new Date Date.parse @end()

      if _start > start then start = _start
      if _end < end then end = _end

      _i = new Date start

      while _i <= end
        _type = if (_i - _start) is 0 
            'first'

          else if (_i - _end) is 0
            'last'

          else 'none'

        _arr.push
          date: new Date _i
          model: @
          itemType: _type

        _i.setDate _i.getDate() + 1

      _arr

    getView: (obj) -> new @View
      model: @
      itemType: obj.itemType

    initialize: (attrs, options) ->
      @View = View

      @proxyCall 'initialize', arguments

      @editView = new EditView
        model: @

      true