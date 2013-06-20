define [
  'ovivo'
], () ->
  postRender: () ->
    @skillGroups = @$('.skill-groups')

    @addSkillGroups @model.skillGroups.map (t) => t

    @model.skillGroups.on 'add', @addSkillGroups, @

  addSkillGroups: (skillGroups) ->
    @_addViewSorted @skillGroups, @model.skillGroups, skillGroups