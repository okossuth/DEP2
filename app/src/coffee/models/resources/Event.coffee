define [
  'models/resources/ResourceBase',

  'collections/resources/Comments',

  'views/resources/Event',
  'views/resources/EventDetails',

  '_features/notificationMessage',

  'ovivo'
], (ResourceBase, Comments, View, DetailsView, notificationMessage) ->
  ResourceBase.extend
    typeName: 'event'

    _gettersNames: [
      'pk'
      'comment'
      'start_time'
      'has_applied'
      'skill'
      'group'
      'num_comments'
      'response_deadline'
      'end_time'
      'type'
      'start_date'
      'deltaHours'
      'pub_date'
      'creator_name'
      'start_time_hours'
      'start_time_minutes'
      'end_time_hours'
      'end_time_minutes'
    ]

    start_time_hours: () -> @start_time()?.split(':')[0]
    start_time_minutes: () -> @start_time()?.split(':')[1]

    end_time_hours: () -> @end_time()?.split(':')[0]
    end_time_minutes: () -> @end_time()?.split(':')[1]

    getKey: () ->
      if @key? then @key
      else
        [year, month, date] = @start_date().split('-')
        [year, month, date] = [parseInt(year), parseInt(month) - 1, parseInt(date)]

        @key = "#{year}-#{month}-#{date}"

    setDeltaHours: do () ->
      _getMinutes = (str) ->
        [hours, minutes] = _.compact(ovivo.config.VALIDATION_REGEXP_TIME.exec(str)).slice -2
        [hours, minutes] = [parseInt(hours), parseInt(minutes)]

        hours * 60 + minutes

      () -> 
        _end = _getMinutes(@end_time())
        _start = _getMinutes(@start_time())

        if _start <= _end
          _delta = (_end - _start) / 60

        else 
          _delta = (_end - _start) / 60 + 24

        @set 'deltaHours', Math.round _delta

    switchType: () ->
      @set 'has_applied', not @has_applied()

      true

    createDetailsView: () ->
      unless @detailsView?
        @detailsView = new DetailsView
          model: @

        @comments.initFetch()

      true

    changeApplicationStatus: (model, flag, obj) -> 
      if (@previous('has_applied') isnt undefined) and (obj.fetching isnt true) and (obj.socket_io isnt true) and (obj.cache_update isnt true) then @save()

    processSync: (event, events, options) ->
      _text = if event.has_applied() is true then gettext('Your bid has now been received') else gettext('Your bid has been removed')

      if (options.fetching isnt true) then notificationMessage.post ovivo.desktop.pages.calendar.view.$el, _text

    initialize: (attrs, options) ->
      @comments = new Comments [],
        event: @

      @View = View

      @proxyCall 'initialize', arguments

      @on 'change:has_applied', @changeApplicationStatus, @

      @on 'sync', @processSync, @

      true