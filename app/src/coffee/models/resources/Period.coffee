define [
  'models/resources/ResourceBase',

  'views/resources/Period',

  'ovivo'
], (ResourceBase, View) ->
  ResourceBase.extend
    typeName: 'period'

    localStorageOnly: true

    _gettersNames: [
      'pk'
      'start_date'
      'end_date'
      'templates'
      'primary_department'
      'groups'
    ]

    initialize: (attrs, options) ->
      @View = View
      
      @proxyCall 'initialize', arguments

      true