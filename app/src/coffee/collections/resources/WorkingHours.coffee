define [
  'models/resources/WorkingHour',

  '_common/ResourceManagerBase',
  '_common/CachableCollection',

  '_features/RuleCompiler',

  'collections/period/HoursBlocks',

  'ovivo'
], (Model, ResourceManagerBase, CachableCollection, RuleCompiler, HoursBlocks) ->
  Backbone.Collection.extend _.extend {}, ResourceManagerBase, CachableCollection.get(['groups', 'user', 'skills']),
    model: Model

    fullResponse: true

    url: "#{ovivo.config.API_URL_PREFIX}working-hours/"

    comparator: (workingHour) -> Date.parse(workingHour.start_date()).valueOf()

    processResponse: do ->
      _processUser = (arr, user) ->
        _.each arr, (obj) =>
          obj.user = user

          @add obj

      (data) ->
        _.each data, _.bind _processUser, @

    _fetch: () ->
      _request = $.ajax
        dataType: 'json'
        type: 'GET'
        url: @url

      _request.done (data) => 
        @processResponse data

        @def.resolve()

    initFetch: () ->
      @_fetch()

    _recalcSkillsCache: () ->
      @recalculateCache ['skills']

    getBlocks: (skills, groups, start, end) ->
      start = new Date Date.parse start
      end = new Date Date.parse end

      _arr = []

      _match = _.intersection @getBy('skills', skills), @getBy('groups', groups)

      _.map _match, (wh) ->
        _arr = _arr.concat RuleCompiler.compile start, end, wh.start_date(), wh.end_date(), wh.repeat(), wh.weekdaysHash,
          workingHour: wh

      _blocks = new HoursBlocks 

      _blocks.add _arr
    
    initialize: () ->
      @initResource()

      @initCacheProcessors()

      $.when(@def, ovivo.desktop.resources.users.def).done _.bind @_recalcSkillsCache, @

      true