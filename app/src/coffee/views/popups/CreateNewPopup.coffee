define [
  'views/popups/Popup',

  'ovivo'
], (Popup) ->
  Popup.extend
    el: '.popup-create-new'

    events: _.extend {}, Popup.prototype.events,
      'click .button-create-time': 'createTime'
      'click .button-create-timeoff': 'createTimeoff'

    createTime: () ->
      if @date?
        _obj = { start_date: @date, end_date: @date }

      else
        _obj = {}

      if not @date?
        ovivo.desktop.pages.settings.show()
        ovivo.desktop.pages.settings.view.showSubView('availability')

      ovivo.desktop.popups.editPopupWorkingHour.create(_obj, @mode)
      ovivo.desktop.popups.editPopupWorkingHour.show()

      @close()

    createTimeoff: () ->
      if @date?
        _obj = { start: @date, end: @date }

      else
        _obj = {}

      if not @date?
        ovivo.desktop.pages.settings.show()
        ovivo.desktop.pages.settings.view.showSubView('timeoff')
      
      ovivo.desktop.popups.editPopupTimeoff.create(_obj, @mode)
      ovivo.desktop.popups.editPopupTimeoff.show()

      @close()

    show: (singleFlag, date) ->
      @date = date

      if singleFlag is true
        @mode = 'create-single'

      else
        @mode = 'create'

      Popup.prototype.show.call @

    initialize: () ->
      @_initialize()

      true
