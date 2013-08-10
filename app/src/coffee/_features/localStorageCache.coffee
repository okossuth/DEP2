define [
], () ->
  _get: (model, url) -> 
    if typeof (_str = localStorage[url]) isnt 'undefined'
      JSON.parse localStorage[url]

    else null

  allowed: () -> 
    @allowed = () -> @_allowed

    @_allowed = typeof window.localStorage isnt 'undefined'

    @_allowed    

  cache: (model, url) ->
    localStorage[url] = JSON.stringify (if (model instanceof Backbone.Model) or (model instanceof Backbone.Collection)
        model.toJSON()
  
      else 
        model)

  init: (model, url) ->
    if model.initializeEmpty is true
      if typeof localStorage[url] is 'undefined'
        if model instanceof Backbone.Model
          localStorage[url] = "{}"

        else if model instanceof Backbone.Collection
          localStorage[url] = "[]"

    true

  reset: (model, url, options) ->
    _value = @_get model, url

    if _value isnt null
      (if model instanceof Backbone.Model
        model.set

      else if model instanceof Backbone.Collection
      
        model.add).call model, _value

      options.resp = _value

      true

    else false