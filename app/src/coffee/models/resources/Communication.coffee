define [
  'models/resources/ResourceBase',

  '_common/ResourceManagerBase',

  'ovivo'
], (ResourceBase, ResourceManagerBase) ->
  ResourceBase.extend _.extend {}, ResourceManagerBase,
    name: 'communication'
    
    url: () -> "#{ovivo.config.API_URL_PREFIX}users/#{ovivo.config.USER_ID}/communication/"

    standaloneModel: true

    _gettersNames: [
      'event_urgent_within'
      'activity_digest'
      'response_confirmation'
      'send_event_compilation_at'
      'event_reminders'
      'notify_sms'
      'notify_email'
    ]

    initialize: (attrs, options) ->
      @initResource()
      
      @proxyCall 'initialize', arguments

      @id = 1

      true