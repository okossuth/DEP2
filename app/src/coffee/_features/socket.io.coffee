define [
  'ovivo'
], () ->
  _getCookie = (name) ->
    _match = document.cookie.match(new RegExp("#{name}=(.*?)(;|$)"))

    if _match isnt null
      _match[1]
    else
      ovivo.config.TEST_SESSIONID_COOKIE

  _pathRegexp = new RegExp("^#{ovivo.config.API_URL_PREFIX_REGEXP}\\/(.*?)\\/(\\d+)\\/$")

  _handlers =
    'connected': () ->

      true

    'connect': () ->
      @_socket.emit 'auth', @_sessionId

      true

    'data': (msg) ->
      msg = $.parseJSON(msg);

      @_processMessage msg

      true

  _initHandlers: () ->
    _.each _handlers, (func, name) =>
      @_socket.on name, _.bind func, @

      @_socket.on name, () ->
        console.log name, arguments

        true

      true

    true

  _processMessage: (msg) ->
    msg = msg.data
    [_match, _path, _id] = msg.target.match _pathRegexp
    
    if (_target = ovivo.desktop.resources[_path])?
      _model = _target.get parseInt _id

      switch msg.action
        when 'create'
          _target.add msg.data, { 'socket_io': true }

        when 'update'
          if _model? then _model.set msg.data, { 'socket_io': true } else _target.add msg.data, { 'socket_io': true }

        when 'delete'
          _target.remove _model

      playAlert 'glass'

    else
      throw new Error 'Socket.IO: wrong target'

    true
  
  init: () ->
    if io? and io.connect?
      @_socket = io.connect ovivo.config.SOCKET_IO_CONNECT_URL

      @_sessionId = if (_cookie = _getCookie('sessionid'))? then _cookie else ovivo.config.TEST_SESSIONID_COOKIE

      @_initHandlers()

    else
      setTimeout (() => @init()), 300

    true
