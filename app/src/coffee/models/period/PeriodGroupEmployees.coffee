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

    _skillGroup.addBlock block

  initialize: () ->
    @skillGroups = new SkillGroups()