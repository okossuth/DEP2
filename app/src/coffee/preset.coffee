if typeof window.ovivo is 'undefined' then window.ovivo = {}
if typeof window.ovivo.desktop is 'undefined' then window.ovivo.desktop = {}

Date.parse = do () ->
  _parse = Date.parse

  _processors = [{
    regExp: /^\s*(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d).*Z\s*$/
    processor: (str) ->
      parts = str.match @regExp

      date = new Date(NaN)

      month = +parts[2]

      date.setUTCFullYear(parts[1], month - 1, parts[3])
      date.setUTCHours(parts[4])
      date.setUTCMinutes(parts[5])
      date.setUTCSeconds(parts[6])

      if (month != date.getMonth() + 1)
        date.setTime(NaN)

      date
  }, {
    regExp: /^(\d{4})-(\d{1,2})-(\d{1,2})$/
    processor: (str) ->
      [match, year, month, day] = str.match @regExp

      new Date parseInt(year), parseInt(month) - 1, parseInt(day)
  }, {
    regExp: /^(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d).(\d\d\d\d\d\d)$/
    processor: (str) ->
      [_year, _month, _day, _hours, _minutes, _seconds, _milliseconds] = str.match(@regExp).slice(1)

      [_year, _month, _day, _hours, _minutes, _seconds, _milliseconds] = [parseInt(_year), parseInt(_month), parseInt(_day), parseInt(_hours), parseInt(_minutes), parseInt(_seconds), parseInt(_milliseconds)]

      new Date _year, _month - 1, _day, _hours, _minutes, _seconds, _milliseconds
  }]

  (str) ->
    _obj = _.find(_processors, (obj) -> obj.regExp.test(str))

    if typeof _obj isnt 'undefined'
      _obj.processor str

    else
      _parse str

Handlebars.registerHelper 'i18n', (value, options) ->
  if value is undefined then value = options
  if typeof value is 'function'
    _value = value.call @
    [_singular, _plural] = options.fn().split('|')

    ngettext _singular, _plural, _value

  else gettext value.fn()

ovivo.Y = (f) -> do (g = (g) -> (a, b) -> f(g(g))(a, b)) -> (a, b) -> f(g(g))(a, b)