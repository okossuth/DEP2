define [
  'views/pages/PageBase',

  '_features/Switcher',

  'ovivo'
], (PageBase, Switcher) ->
  PageBase.extend
    el: '.page.page-settings .notifications-view'

    name: 'notifications'

    events: {}

    keys: ['notify_email', 'notify_sms', 'activity_digest', 'response_confirmation', 'event_reminders', 'event_urgent_within']
    types: [0, 0, 0, 0, 0, 1]

    variants: [
      [true, false]
      [3, 7, 14]
    ]

    _valueHandlerCreator: (key) ->
      (value) ->
        ovivo.desktop.resources.communication.set key, value

    setValues: () ->
      _.each @keys, (key, i) => 
        _switcher = @switchers[key]

        _switcher.setValue ovivo.desktop.resources.communication[key]()

    save: () ->
      console.log 'notifications save'

    initialize: () ->
      @switchers = {}

      @on 'action:save', @save, @

      _.each @keys, (key, i) => 
        _switcher = @switchers[key] = new Switcher @$('.options-' + key), @variants[@types[i]]

        _switcher.on 'value', @_valueHandlerCreator key

      ovivo.desktop.resources.communication.def.done _.bind @setValues, @

      ovivo.desktop.resources.communication.on 'sync', @setValues, @

      true