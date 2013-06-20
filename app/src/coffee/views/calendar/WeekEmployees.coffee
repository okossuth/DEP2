define [
], () ->
  addEvent: (event) ->
    if (_group = @periodGroups.get(event.group()))? then _group.addEvent event

    true

  removeEvent: (event) ->
    if (_group = @periodGroups.get(event.group()))? then _group.removeEvent event

    true