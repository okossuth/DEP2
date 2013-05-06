define [
  'models/resources/ResourceBase',

  'views/resources/Availability',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    typeName: 'availability'

    _gettersNames: [
      'pk'
      'start'
      'end'
      'available'
      'time_span'
      'group'
      'user'
    ]

    _getTimeValue: (str) ->
      _obj = new Date Date.parse str

      _obj.getHours() * 60 + _obj.getMinutes()

    getView: () -> new View
      model: @

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments
      @set 'pk', @cid

      @startValue = @_getTimeValue @start()
      @endValue = @_getTimeValue @end()

      if @endValue < @startValue then @endValue += 24 * 60

      true