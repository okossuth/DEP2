define [
  'ovivo'
], () ->
  Backbone.View.extend
    events:
      'change .property-value': 'changeProperty'
      'click .close': 'close'
      'click .button-add': 'add'

    propertyRegExp: /\bproperty-value-(\w+)\b/

    changeProperty: (e) ->
      _input = $(e.target).closest('.property-value')
      _name = @propertyRegExp.exec(_input[0].className)[1]

      @model.set _name, @types[_name](_input.val()),
        validate: true

    close: () -> @hide()

    add: () -> 
      @collection.add @model

      @model.save()

      @close()

    setModel: (model) ->
      @model = model

      @$('.button-add').hide()

      _.each @fields, (field) =>
        _input = @$('.property-value-' + field)

        if _input.hasClass 'datepicker'
          _date = new Date Date.parse model[field]()

          _input.data('pickadate').setDate _date.getFullYear(), _date.getMonth() + 1, _date.getDate()

        else
          @$('.property-value-' + field).val model[field]().toString()

    show: () ->
      @$el.show()

      $('.popup-overlay').show()

    hide: () ->
      @$el.hide()

      $('.popup-overlay').hide()

    _initialize: () ->
      true
