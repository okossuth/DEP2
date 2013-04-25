define [
  'ovivo'
], () ->
  Backbone.Model.extend
    forwardEvent: () -> 
      _args = Array.prototype.slice.call arguments, 0
      _args.splice 1, 0, @
      
      @trigger.apply @, _args
      
    initialize: (attrs, options) ->
      @page = new options.Page {}, options.options

      @name = options.name

      ovivo.desktop.pages[@name] = @page

      @page.on 'all', @forwardEvent, @

      true