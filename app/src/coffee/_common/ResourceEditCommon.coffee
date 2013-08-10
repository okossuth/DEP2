define [
], () ->
  get: (parentEvents) ->
    events: _.extend {}, parentEvents,
      'change .property-value': 'processPropertyChange'
      'keyup .property-value': 'processPropertyChange'
      'click .button-add': 'add'
      'click .button-save': 'save'
      'click .button-delete': 'delete'

    propertyRegExp: /\bproperty-value-(\w+)\b/

    modes: ['edit', 'create']

    processPropertyChange: (e) ->
      _input = $(e.target).closest('.property-value')
      _header = $(e.target).closest('.settings-item').children('.header')

      _name = @propertyRegExp.exec(_input[0].className)[1]

      if (_picker = _input.pickadate('picker'))?
        _val = _picker.get 'select', 'yyyy-mm-dd'

      else
        _val = _input.val()

      _value = @types[_name] _val

      if _value is @original[_name]()
        _header.removeClass 'changed'

      else
        _header.addClass 'changed'

      @model.set _name, _value,
        validate: true

    _getAddSyncHandler: (collection, model, originalModel) ->
      _handler = () -> 
        collection.add model

        model.off 'sync', _handler
        
        delete model.url

      _handler

    _getSaveSyncHandler: (collection, model, originalModel) ->
      _this = @

      _handler = () ->
        _this.clearChangeState()

        originalModel.set model.toJSON(), { update: true }

        model.off 'sync', _handler

        delete model.url

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

    initMode: (name) ->
      _hide = _.without @modes, name

      _.each _hide, (name) => @$(".#{name}-mode").hide()

      @$(".#{name}-mode").show()

    create: (obj, mode) ->
      if not mode? then mode = 'create'

      @createNew obj, mode

      @initMode mode

    edit: (model, mode) ->
      if not mode? then mode = 'edit'

      @setModel model, mode

      @initMode mode

    _createEditCopy: (model) -> 
      _copy = new model.constructor model.toJSON()
      _copy.editCopy = true

      _copy

    _initComponents: () ->
      @_components = {}

      _.each @fields, (field, i) =>
        if typeof field is 'object'
          @[field.init] field.name, i

        else
          @_components[field] = @$(".property-value-#{field}")

      @_initComponents = () ->

    attachHandlers: () ->

    detachHandlers: () ->

    clearChangeState: () -> @$('.header.changed').removeClass 'changed'

    setModel: (model, mode) ->
      @clearChangeState()

      @_initComponents()

      @original = model

      if @model? then @detachHandlers mode

      @model = @_createEditCopy model

      @attachHandlers mode

      @trigger 'change:model', @model

      _.each @fields, (field) =>
        if typeof field is 'object'
          @[field.setValue] field.name, @model[field.name]()

          return true

        _component = @_components[field]

        if _component.hasClass 'datepicker'
          _date = new Date Date.parse @model[field]()

          _component.each (i, el) -> $(el).pickadate('picker').set 'select', _date

        else if _component.hasClass 'plain-value'
          $.when(@model.view[field]()).done (_str) -> _component.html _str

        else
          _component.val @model[field]()?.toString()

        true