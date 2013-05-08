define [
  '_features/indicator',

  'ovivo'
], (indicator) ->
  _.extend {}, Backbone.Events,
    _set: (name, value) ->
      if @[name] isnt value
        @[name] = value

        @trigger "change:#{name}", value

    _get: (name) -> @[name]

    processFBLoginStatus: (obj) ->
      @signedRequest = obj?.authResponse?.signedRequest

      @_set 'fb-status', obj.status

      if obj.status is 'connected' then @connectFBdef?.resolve()

      true

    _setHandlers: () ->
      @on 'change:status', @linkFacebook, @

    processAuth: (data, textStatus, jqXHR) ->
      indicator.success()

      if jqXHR.status is 204
        @_set 'status', false

      else if jqXHR.status is 200

        @_set 'status', true

      @trigger '_setHandlers'
      
      true

    initFB: () ->
      FB.init 
        appId: ovivo.config.FB_APP_ID
        status: true
        cookie: true
        xfbml: true

      indicator.start()

      $.ajax 
        url: '/api/1.0/authorize/connection/'
        success: (_.bind @processAuth, @)
        error: indicator.error

      FB.getLoginStatus _.bind @processFBLoginStatus, @

    processFBLogin: (obj) ->
      @processFBLoginStatus obj

    processFBLogout: (obj) ->
      @processFBLoginStatus obj

    connectFB: () ->
      @connectFBdef = new $.Deferred()

      FB.login () => FB.getLoginStatus (_.bind @processFBLogin, @), { redirect_uri: 'http://ovivo-mobile.eur00t.com' }

      @connectFBdef

    disconnectFB: () ->
      FB.logout () => FB.getLoginStatus _.bind @processFBLogout, @

    linkFB: () ->
      indicator.start()

      $.ajax
        type: 'POST'
        data: JSON.stringify({ signed_request: @signedRequest })

        contentType: 'application/json'

        url: '/api/1.0/authorize/connection/'
        success: (_.bind @processAuth, @)
        error: indicator.error

      true

    unlinkFB: () ->
      indicator.start()
      
      $.ajax
        type: 'DELETE'
        data: ' '
        url: '/api/1.0/authorize/connection/'
        success: (_.bind @processAuth, @)
        error: indicator.error

      true

    linkFacebook: () ->
      _FBStatus = @_get 'fb-status'
      _status = @_get 'status'

      if _FBStatus is 'connected'
        if _status is true
          @linkFB()

        else if _status is false
          @unlinkFB()

      else
        if _status is true
           @connectFB().done () => @linkFB()

        else if _status is false
          @unlinkFB()

          true

      false

    initialize: () ->
      @once '_setHandlers', @_setHandlers, @
      if window.FB? then @initFB()
      else window.fbAsyncInit = () => @initFB()
      
      true
