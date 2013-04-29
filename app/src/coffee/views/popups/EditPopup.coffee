define [
  'ovivo'
], () ->
  Backbone.View.extend
    events:
      'change .property-value': 'changeProperty'
      'click .close': 'close'

    propertyRegExp: /\bproperty-value-(.+)\b/

    changeProperty: (e) ->
      _input = $(e.target).closest('.property-value')
      _name = @propertyRegExp.exec(_input[0].className)[1]

      @model.set _name, eval(_input.val())

    close: () -> @hide()

    setModel: (model) ->
      @model = model

      _.each @fields, (field) => @$('.property-value-' + field).val model[field]().toString()

    show: () ->
      @$el.show()

      $('.popup-overlay').show()

    hide: () ->
      @$el.hide()

      $('.popup-overlay').hide()

    _initialize: () ->
      true
