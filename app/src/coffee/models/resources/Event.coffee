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
      @proxyCall 'initialize', arguments

      true