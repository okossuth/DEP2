define [
  'models/resources/ResourceBase',

  '_common/ResourceManagerBase',

  'ovivo'
], (ResourceBase, ResourceManagerBase) ->
  ResourceBase.extend _.extend {}, ResourceManagerBase,
    url: () -> "#{ovivo.config.API_URL_PREFIX}users/#{ovivo.config.USER_ID}/"

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

    toJSON: () ->
      _json = Backbone.Model.prototype.toJSON.call @

      delete _json.groups
      delete _json.skills

      _json

    initialize: (attrs, options) ->
      @initResource()
      
      @proxyCall 'initialize', arguments

      true