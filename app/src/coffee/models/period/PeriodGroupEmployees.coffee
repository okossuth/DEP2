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

  removeBlock: (block) ->
    _skillGroup = @skillGroups.get block.skill()

    if _skillGroup? then _skillGroup.removeBlock block

    @_blocksCounter -= 1

    if @_blocksCounter is 0
      @collection.remove @

  initialize: () ->
    @skillGroups = new SkillGroups()