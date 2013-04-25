define [
  '_common/ToolsBase',
  
  'ovivo'
], (ToolsBase) ->
  _Base = Backbone.View.extend _.extend {}, ToolsBase,
    show: () ->
      @model.trigger.apply @model, ['show'].concat Array.prototype.slice.call arguments, 0

      true

    showEl: () -> @$el.removeClass 'hide'
    hideEl: () -> @$el.addClass 'hide'

    transitionStart: () ->

    transitionComplete: (type) -> 
      if type is 'exit' then @hideEl()

      true

    initialize: () ->
      @content = @$('div.content')[0]

      true

  _Base.prototype._base = _Base

  _Base
