define [
  '_features/trailZero'

], (trailZero) ->
  (date) -> "#{date.getFullYear()}-#{trailZero(date.getMonth() + 1)}-#{trailZero(date.getDate())}"