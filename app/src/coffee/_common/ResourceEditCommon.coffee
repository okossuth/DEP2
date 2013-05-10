define [
], () ->
  get: (parentEvents) ->
    events: _.extend {}, parentEvents,
      'change .property-value': 'changeProperty'
      'click .button-add': 'add'
      'click .button-delete': 'delete'

    propertyRegExp: /\bproperty-value-(\w+)\b/

    changeProperty: (e) ->
      _input = $(e.target).closest('.property-value')
      _name = @propertyRegExp.exec(_input[0].className)[1]

      @model.set _name, @types[_name](_input.val()),
        validate: true

    _getSyncHandler: (collection, model) ->
      _handler = () -> 
        collection.add model

        model.off 'sync', _handler
        
        delete model.url

      _handler

    add: () ->
      @model.on 'sync', @_getSyncHandler @collection, @model

      @model.url = @collection.url

      @model.save()

      @close()

    delete: () ->
      @model.destroy()

      @close()

    initCreateMode: () ->
      @$('.create-mode').show()
      @$('.edit-mode').hide()

    initEditMode: () ->
      @$('.create-mode').hide()
      @$('.edit-mode').show()

    setModel: (model) ->
      @model = model

      @initEditMode()

      _.each @fields, (field) =>
        _input = @$('.property-value-' + field)

        if _input.hasClass 'datepicker'
          _date = new Date Date.parse model[field]()

          _input.data('pickadate').setDate _date.getFullYear(), _date.getMonth() + 1, _date.getDate()

        else
          @$('.property-value-' + field).val model[field]()