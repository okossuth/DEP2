define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    _gettersNames: [
      'first_name'
      'last_name'
      'groups'
      'skills'
      'email'
      'email_confirmed'
      'mobile_phone_prefix'
      'mobile_phone'
    ]

    name: () -> @first_name() + ' ' + @last_name()

    initialize: (attrs, options) ->
      @proxyCall 'initialize', arguments

      true