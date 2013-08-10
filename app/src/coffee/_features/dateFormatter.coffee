define [
  '_features/trailZero',

  'ovivo'
], (trailZero) ->
  TIME_TITLES = [
    [-10800000, gettext('just now')],
    [0, gettext('just now')],
    [1000, gettext('a second ago')],
    [60000, gettext('a minute ago')],
    [180000, gettext('few minutes ago')],
    [3600000, gettext('an hour ago')],
    [7200000, gettext('few hours ago')]
  ]

  NORMAL_DATE_RANGE = 10800000

  (date) ->
    if (date instanceof Date) isnt true
      date = new Date Date.parse date

    delta = (new Date()) - date + date.getTimezoneOffset() * 60 * 1000 + ovivo.config.TIMEZONE_OFFSET

    if delta > NORMAL_DATE_RANGE
      "#{ovivo.config.DAYS[date.getDay()].toLowerCase().slice(0, 1)}. #{date.getDate()}. #{ovivo.config.MONTHS[date.getMonth()]} #{date.getFullYear()} #{trailZero(date.getHours())}:#{trailZero(date.getMinutes())}"
    else
      returnValue = ''

      _.each TIME_TITLES, (title) ->
        if delta > title[0] then returnValue = title[1]

      returnValue
