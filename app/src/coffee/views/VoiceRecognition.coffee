define [
  'ovivo'
], () ->
  Backbone.View.extend
    el: '#voice-recognition'

    processKey: (e) ->
      if not ((e.ctrlKey is true) and (e.shiftKey is true) and (e.keyCode is 19)) then return
      
      @model.set 'show', true
      @model.set 'processing', true

    resultsTemplate: Handlebars.templates['speechResults']

    _clearState: () ->
      @$el.removeClass 'initial processing result error'

    changeShow: () ->
      if @model.show() is true
        @_clearState()

        @$el.addClass 'initial'

        @$el.addClass 'show'

      else
        setTimeout (() => @_clearState(); @$el.removeClass 'show'), 1000

      true

    processStart: () ->
      @_clearState()

      @$el.addClass 'processing'

    processEnd: () ->

    processResult: (results) ->
      @_clearState()

      @$el.addClass 'result'

      @$('.result').html @resultsTemplate 
        results: _.map results, (res) =>
          status: if res.flag is true then 'success' else 'error'
          text: res.text

    processError: () ->
      @_clearState()

      @$el.addClass 'error'

    initialize: () ->
      $(window).on 'keypress', _.bind @processKey, @

      @model.on 'change:show', @changeShow, @

      true