define [
  'models/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    _gettersNames: [
      'pk'
      'first_name'
      'last_name'
      'name'
      'groups'
      'skills'
      'email'
      'email_confirmed'
      'mobile_phone_prefix'
      'mobile_phone'
    ]

    initialize: (attrs, options) ->
      @attributes.name = attrs.first_name + ' ' + attrs.last_name

      @proxyCall 'initialize', arguments

      true