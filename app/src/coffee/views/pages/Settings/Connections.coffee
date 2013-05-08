define [
  'views/pages/PageBase',

  '_features/Switcher',
  '_features/facebook',

  'ovivo'
], (PageBase, Switcher, facebook) ->
  PageBase.extend
    el: '.page.page-settings .connections-view'

    name: 'connections'

    events: {}

    keys: ['facebook']
    types: [0]

    variants: [
      [true, false]
    ]

    _valueHandlerCreator: (key, processor) ->
      _func = (value) ->
        processor._set 'status', value

      _.bind _func, @

    _valueHandlerSetCreator: (key) ->
      _connect = @$(".options-#{key} .option-connect")
      _disconnect = @$(".options-#{key} .option-disconnect")

      _func = (value) ->
        if value is true
          _connect.html gettext('Connected')
          _disconnect.html gettext('Disconnect')

        else
          _connect.html gettext('Connect')
          _disconnect.html gettext('Disconnected')

        @switchers[key].setValue value

      _.bind _func, @
        
    initialize: () ->
      @switchers = {}

      _.each @keys, (key, i) => 
        _switcher = @switchers[key] = new Switcher @$('.options-' + key), @variants[@types[i]]
        _processor = eval(key)

        _processor.initialize()
        _processor.on 'change:status', @_valueHandlerSetCreator key

        _switcher.on 'value', @_valueHandlerCreator key, _processor

      true