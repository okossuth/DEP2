define [
], () ->
  time: (name, time) ->
    _returnValue = undefined

    match = _.compact ovivo.config.VALIDATION_REGEXP_TIME.exec time

    if match.length is 0
      _returnValue = name
    else
      match = match.slice 1

      _hours = parseInt match[2]

      if !((_hours >= 0) and (_hours <= 24))
        _returnValue = name
      else
        _minutes = parseInt match[3]

        if !((_minutes >= 0) and (_minutes <= 60))
          _returnValue = name

    _returnValue

  number: (name, value) ->
    if (typeof value isnt 'number') or (value <= 0) or ((value - Math.floor(value)) isnt 0) then name else undefined