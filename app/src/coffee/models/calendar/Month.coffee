define [
  '_common/CalendarBase',

  'models/resources/ResourceBase',
  'models/calendar/DaysCollector',

  'views/calendar/Month',

  'ovivo'
], (CalendarBase, ResourceBase, DaysCollector, View) ->
  ResourceBase.extend _.extend {}, CalendarBase, DaysCollector,
    _gettersNames: [
      'month'
      'year'
      'pk'
    ]

    initialize: (attrs, options) ->
      @_initialize()

      @View = View

      @set 'pk', "#{@year()}-#{@month()}"

      @_firstDate = new Date @year(), @month(), 1

      @weeks = @getWeeksArr @year(), @month()
      @days = @getDaysArr @weeks

      @proxyCall 'initialize', arguments

      ovivo.desktop.resources.availabilities.fetchMonth attrs.month, attrs.year

      true