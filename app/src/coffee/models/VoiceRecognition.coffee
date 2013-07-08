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
      parser.parse(str.split(/\s+/), voiceRecognitionGrammar, voiceRecognitionGrammar.$root).treesForRule voiceRecognitionGrammar.$root

    _analyseSpeech: do ->
      (str) ->
        if not (_tree = @_applyGrammar(str)[0])? then return false

        switch _tree.data.type

          when 'open'
            ovivo.desktop.pages[_tree.data.target].show()

        true

    processStart: () ->
      @view.processStart()

    processEnd: () ->
      @view.processEnd()

      @set 'processing', false

    processResult: (e) ->
      @view.processResult _.flatten _.map e.originalEvent.results, (res) => _.map res, (res) =>
        _flag = @_analyseSpeech res.transcript

        text: res.transcript
        flag: _flag

      true

    processError: () ->
      @view.processError()

    initialize: () ->
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