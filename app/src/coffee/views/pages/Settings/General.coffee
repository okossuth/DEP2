define [
  'views/pages/PageBase',

  '_common/ResourceEditCommon',

  'ovivo'
], (PageBase, ResourceEditCommon) ->
  PageBase.extend _.extend {}, ResourceEditCommon.get({}),
    el: '.page.page-settings .general-view'

    name: 'general'

    fields: ['first_name', 'last_name', 'mobile_phone', 'email']

    types: 
      'first_name': String
      'last_name': String
      'mobile_phone': String
      'email': String

    saveHandler: () ->
      @save()

    close: () ->

    show: () ->
      ovivo.desktop.resources.user.def.done () => @setModel ovivo.desktop.resources.user
      
    initialize: () ->
      @on 'action:save', @saveHandler, @
      @on 'show', @show, @

      true