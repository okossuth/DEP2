define [
  'views/pages/PageBase',

  '_features/trailZero',

  'collections/PeriodBlocks', 

  'ovivo'
], (PageBase, trailZero, PeriodBlocks) ->
  PageBase.extend
    el: '.page.page-resources .content-timeline'

    name: 'timeline'

    events: {}

    scaleTemplate: Handlebars.templates['scale']
    skillsTemplate: Handlebars.templates['timelineSkills']
    skillColumnsTemplate: Handlebars.templates['skillColumns']

    close: () ->
      @page.showSubView 'periods'

    scale: () ->
      _arr = []

      _i = new Date Date.parse @model.start_date()
      _end = new Date Date.parse @model.end_date()
      _end = _end.setDate _end.getDate() + 1

      while _i <= _end
        _obj = 
          date: "#{trailZero(_i.getDate())}.#{trailZero(_i.getMonth() + 1)}.#{_i.getFullYear()}"

        if (_i - _end) is 0
          _obj.last = true

        _arr.push _obj

        _i.setDate _i.getDate() + 1

      _arr

    skills: () ->
      _keys = @blocks.getKeys('skill')
      _percentage = 100 / _keys.length

      _.map _.map(@blocks.getKeys('skill'), (id) -> ovivo.desktop.resources.skills.get id), (skill) ->
        pk: skill.pk()
        name: skill.name()
        width: _percentage + '%'

    _renderTimeline: () ->
      @scaleContainer.css 'height', 'auto'
      @columns.css 'height', 'auto'

      @scaleContainer.children().remove()
      @scaleContainer.append $(@scaleTemplate @).children()

      @skillsContainer.children().remove()
      @skillsContainer.append $(@skillsTemplate @).children()

      @columns.children().remove()
      @columns.append $(@skillColumnsTemplate @).children()

    _initScale: () ->
      _start = new Date Date.parse @model.start_date()
      _end = new Date Date.parse @model.end_date()

      _end = _end.setDate _end.getDate() + 1

    _renderBlocks: () ->
      _start = new Date Date.parse @model.start_date()

      @blocks.each (block) =>
        block.view.adjustPosition _start, @timeRange, @height

        @skillColumns[block.skill()].append block.view.el

    initPeriod: () ->
      @blocks = PeriodBlocks.create @model.compile()

      @_renderTimeline()

      @height = @scaleContainer.height()

      @scaleContainer.height @height
      @columns.height @height

      @skillColumns = {}

      _.each @blocks.getKeys('skill'), (id) =>
        @skillColumns[id] = @$(".skill-column-#{id} ul.blocks")

      @_initScale()

      @_renderBlocks()

    setPeriod: do ->
      _attachHanlders = (model) ->
        
      _detachHanlders = (model) ->
        
      (model) ->
        @model = model

        if @prevModel? then _detachHanlders.call @, @prevModel

        _attachHanlders.call @, @model

        @prevModel = @model

        @initPeriod()

    initialize: () ->
      @scaleContainer = @$('ul.scale')
      @skillsContainer = @$('ul.skills')
      @columns = @$('ul.skill-columns')

      true