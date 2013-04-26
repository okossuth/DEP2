define [
  '_common/CalendarBase',

  'models/resources/ResourceBase',

  'views/Month',

  'ovivo'
], (CalendarBase, ResourceBase, View) ->
  ResourceBase.extend _.extend {}, CalendarBase,
    firstDate: () -> @_firstDate

    _gettersNames: [
      'month'
      'year'
      'pk'
    ]

    show: () -> @view.show()
    hide: () -> @view.hide()

    initDays: () -> 
      @collection.monthDays.initElements @view.dayElements, @days

    initialize: (attrs, options) ->
      @View = View

      @set 'pk', "#{@year()}-#{@month()}"

      @on 'rendered', @initDays, @

      @_firstDate = new Date @year(), @month(), 1

      @weeks = @getWeeksArr @year(), @month()
      @days = @getDaysArr @weeks

      @proxyCall 'initialize', arguments

      ovivo.desktop.resources.events.fetchMonth(@month(), @year())

      true