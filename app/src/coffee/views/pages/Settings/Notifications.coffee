define [
  'views/pages/PageBase',

  '_common/ResourceEditCommon',

  '_features/Switcher',

  'ovivo'
], (PageBase, ResourceEditCommon, Switcher) ->
  PageBase.extend _.extend {}, ResourceEditCommon.get({}),
    el: '.page.page-settings .notifications-view'

    name: 'notifications'

    fields: [{
        name: 'notify_email'
        init: '_initSwitcher'
        setValue: '_setValue'
      }, {
        name: 'notify_sms'
        init: '_initSwitcher'
        setValue: '_setValue'
      }, {
        name: 'activity_digest'
        init: '_initSwitcher'
        setValue: '_setValue'
      }, {
        name: 'response_confirmation'
        init: '_initSwitcher'
        setValue: '_setValue'
      }, {
        name: 'event_reminders'
        init: '_initSwitcher'
        setValue: '_setValue'
      }, {
        name: 'event_urgent_within'
        init: '_initSwitcher'
        setValue: '_setValue'
    }]

    types: [0, 0, 0, 0, 0, 1]

    variants: [
      [true, false]
      [3, 7, 14, null]
    ]

    _initSwitcher: (key, i) ->
      _switcher = @switchers[key] = new Switcher @$('.options-' + key), @variants[@types[i]]

      _switcher.on 'value', @_valueHandlerCreator key

    _setValue: (name, value) -> 
      @switchers[name].setValue value

    _valueHandlerCreator: (key) ->
      _this = this
      _header = @$('.options-' + key).closest('.settings-item').children('.header')

      (value) ->
        if value is _this.original[key]()
          _header.removeClass 'changed'

        else
          _header.addClass 'changed'

        _this.model.set key, value

    saveHandler: () ->
      @save()

    close: () ->

    show: () ->
      ovivo.desktop.resources.communication.def.done () => @setModel ovivo.desktop.resources.communication

    initialize: () ->
      @switchers = {}

      @on 'action:save', @save, @
      @on 'show', @show, @

      @show()

      true