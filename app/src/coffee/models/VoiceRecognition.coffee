define [
  'models/resources/ResourceBase',

  'views/VoiceRecognition',

  '_features/voiceRecognitionGrammar',

  'srgs-parser',

  'ovivo'
], (ResourceBase, View, voiceRecognitionGrammar, parser) ->
  ResourceBase.extend
    _gettersNames: [
      'processing'
      'show'
    ]

    changeProcessing: () ->
      _val = @processing()

      if _val is false
        @set 'show', false

        return

      if _val is true
        @_recognition.start()

      true

    _applyGrammar: (str) ->
      console.log _res = parser.parse(str.split(/\s+/), voiceRecognitionGrammar, voiceRecognitionGrammar.$root).treesForRule voiceRecognitionGrammar.$root

      _res

    processStart: () ->
      console.log 'started'

    processEnd: () ->
      console.log 'ended'

      @set 'processing', false

    processResult: (e) ->
      console.log 'result:', e.originalEvent.results

    processError: () ->
      console.log 'error'

    initialize: () ->
      @_applyGrammar 'open calendar'

      if window.webkitSpeechRecognition is undefined then return

      @_recognition = new webkitSpeechRecognition()
      @_recognition.lang = ovivo.config.LANG

      $(@_recognition).on 'start', _.bind @processStart, @
      $(@_recognition).on 'end', _.bind @processEnd, @
      $(@_recognition).on 'result', _.bind @processResult, @
      $(@_recognition).on 'error', _.bind @processError, @

      @on 'change:processing', @changeProcessing, @

      @View = View
      
      @proxyCall 'initialize', arguments