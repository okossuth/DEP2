define [
], () ->
  get: (parentEvents) ->
    events: _.extend {}, parentEvents,
      'change .property-value': 'changeProperty'
      'click .button-add': 'add'
      'click .button-save': 'save'
      'click .button-delete': 'delete'

    propertyRegExp: /\bproperty-value-(\w+)\b/

    changeProperty: (e) ->
      _input = $(e.target).closest('.property-value')
      _name = @propertyRegExp.exec(_input[0].className)[1]

      @model.set _name, @types[_name](_input.val()),
        validate: true

    _getAddSyncHandler: (collection, model, originalModel) ->
      _handler = () -> 
        collection.add model

        model.off 'sync', _handler
        
        delete model.url

      _handler

    _getSaveSyncHandler: (collection, model, originalModel) ->
      _handler = () -> 
        originalModel.set model.toJSON()

        model.off 'sync', _handler

      _handler

    _syncProcessor: (handlerGetter) ->
      @model.on 'sync', handlerGetter.call @, @collection, @model, @original

      if @model.standaloneModel isnt true
        @model.url = @collection.url

        if @model.id? then @model.url += @model.id + '/'

      else
        @model.url = @original.url

      @model.save()

      @close()

    save: () -> @_syncProcessor @_getSaveSyncHandler

    add: () -> @_syncProcessor @_getAddSyncHandler

    delete: () ->
      @original.destroy()

      @close()

    initCreateMode: () ->
      @$('.create-mode').show()
      @$('.edit-mode').hide()

    initEditMode: () ->
      @$('.create-mode').hide()
      @$('.edit-mode').show()

    _createEditCopy: (model) -> new model.constructor model.toJSON()

    setModel: (model) ->
      @original = model

      @model = @_createEditCopy model

      @trigger 'change:model', @model

      @initEditMode()

      _.each @fields, (field) =>
        _value = @$('.property-value-' + field)

        if _value.hasClass 'datepicker'
          _date = new Date Date.parse @model[field]()

          _value.data('pickadate').setDate _date.getFullYear(), _date.getMonth() + 1, _date.getDate()

        else if _value.hasClass 'plain-value'
          $.when(@model.view[field]()).done (_str) -> _value.html _str

        else
          _value.val @model[field]()?.toString()