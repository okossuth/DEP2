define [
  'models/period/Block',

  'ovivo'
], (Block) ->
  Block.extend
    idAttribute: 'cid'

    _gettersNames: [
      'date',
      'workingHour',
      ['start_time', 'workingHour']
      ['end_time', 'workingHour']
      ['skills', 'workingHour']
      ['groups', 'workingHour']
      ['pk', 'workingHour']
      ['startValue', 'workingHour']
      ['endValue', 'workingHour']
      ['user', 'workingHour']
    ]

    initialize: () ->
      @proxyCall 'initialize', arguments

      @groupsHash = @workingHour().groupsHash

      ovivo.desktop.resources.users.def.done () => @skillsHash = @workingHour().skillsHash

      true