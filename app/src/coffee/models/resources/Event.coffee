define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    typeName: 'event'

    _gettersNames: [
      'pk'
      'comment'
      'users'
      'start_time'
      'skill'
      'pub_date'
      'group'
      'creator_name'
      'num_comments'
      'response_deadline'
      'assignees'
      'end_time'
      'type'
      'start_date'
    ]

    date: () ->
      if @key? then @key
      else
        [year, month, date] = @start_date().split('-')
        [year, month, date] = [parseInt(year), parseInt(month) - 1, parseInt(date)]

        @key = "#{year}-#{month}-#{date}"

    initialize: (attrs, options) ->
      @dateObj = new Date Date.parse attrs.start_date

      _day = @dateObj.getDay() - 1
      if _day is -1 then _day = 6

      @day = _day

      @proxyCall 'initialize', arguments

      true