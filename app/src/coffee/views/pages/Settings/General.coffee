define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
    el: '.page.page-settings .general-view'

    name: 'general'

    events:
      'change input.value': 'changeValue'

    nameRegExp: /\bvalue-(.+)\b/

    keys: ['first_name', 'last_name', 'mobile_phone', 'email']

    changeValue: (e) ->
      _input = $(e.target).closest('.value')[0]
      _name = @nameRegExp.exec(_input.className)[1]

      ovivo.desktop.resources.user.set _name, _input.value

    setValues: () ->
      _.each @keys, (key) => @$('input.value-' + key).val ovivo.desktop.resources.user[key]()

    initialize: () ->
      ovivo.desktop.resources.user.def.done _.bind @setValues, @

      ovivo.desktop.resources.user.on 'sync', @setValues, @

      true