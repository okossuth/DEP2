define [
  'collections/period/SkillGroups',

  'ovivo'
], (SkillGroups) ->
  addBlock: (block) ->
    _key = block.skill()

    _skillGroup = @skillGroups.get _key

    if not _skillGroup? then _skillGroup = @skillGroups.addModel
      pk: _key
      group: block.group()
      frame: @frame()

    _skillGroup.addBlock block

  _removeBlockPartial: (block) ->
    if block.resourceNeed().changed?.skill?
      _key = block.resourceNeed().previous 'skill'

    else
      _key = block.skill()

    _skillGroup = @skillGroups.get _key

    if _skillGroup? then _skillGroup.removeBlock block

  addEvent: (event) ->
    if (_group = @skillGroups.get(event.skill()))? then _group.addEvent event

    true

  removeEvent: (event) ->
    if (_group = @skillGroups.get(event.skill()))? then _group.removeEvent event

    true

  addHoursBlock: (block) -> ovivo.desktop.resources.users.def.done () =>
    _.each block.skills(), (skill) =>
      if (_group = @skillGroups.get(skill))? then _group.addHoursBlock block

    true
      
  removeHoursBlock: (block) ->

  initialize: () ->
    @skillGroups = new SkillGroups()
    @skillGroups.periodGroup = @