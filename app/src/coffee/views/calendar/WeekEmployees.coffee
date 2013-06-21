define [
], () ->
  addEvent: (event) ->
    if (_group = @periodGroups.get(event.group()))? then _group.addEvent event

    true

  removeEvent: (event) ->
    if (_group = @periodGroups.get(event.group()))? then _group.removeEvent event

    true

  addHoursBlock: (block) ->
    _periodGroup = @periodGroups.get block.group()

    if _periodGroup? then _periodGroup.addHoursBlock block

    true

  removeHoursBlock: (block) ->
    _periodGroup = @periodGroups.get block.group()

    if _periodGroup? then _periodGroup.removeHoursBlock block

    true

  addHoursBlocks: (arr) ->
    _.each arr, (block) => @addHoursBlock block

  removeHoursBlocks: (arr) ->
    _.each arr, (block) => @removeHoursBlocks block

  _initFrame: () ->
    @addHoursBlocks @model.frame.hoursBlocks.map (b) -> b

    @model.frame.hoursBlocks.on 'add', @addHoursBlock, @
    @model.frame.hoursBlocks.on 'remove', @removeHoursBlock, @

  _postInitFrame: () ->
    @model.frame.hoursBlocks.on 'add', @_updateScroll, @
    @model.frame.hoursBlocks.on 'remove', @_updateScroll, @