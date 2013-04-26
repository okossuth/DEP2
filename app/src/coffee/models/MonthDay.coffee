define [
  'models/resources/ResourceBase',

  'views/MonthDay',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'date'
      'disabled'
      'month'
      'week_number'
      'year'
    ]

    addEvent: (event) -> @view.addEvent event.view

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      @set 'pk', "#{@year()}-#{@month()}-#{@date()}#{if @disabled() is true then '-disabled' else ''}"

      @view = new View
        model: @
        el: options.el

      true