define [
  '_common/ToolsBase',

  'collections/calendar/Days',

  'ovivo'
], (ToolsBase, Days) ->
  _Base = Backbone.Collection.extend _.extend {}, ToolsBase,
    comparator: (elem) -> elem.firstDate()

    addElement: (obj) ->
      _elem = new @model obj, 
        collection: @

      @add _elem

      _elem

    show: (elem) ->
      if @prevElem?
        @prevElem.hide()

        @trigger 'hide', @prevElem

        delete @prevElem.visible

      elem.visible = true

      elem.show()
      
      @trigger 'show', elem

      @prevElem = elem

    initialize: (models, options) ->
      _.extend @, options

      @days = new Days [],
        model: @DayModel

      true

  _Base.prototype._base = _Base

  _Base