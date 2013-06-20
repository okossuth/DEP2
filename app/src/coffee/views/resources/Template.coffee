define [
  'views/resources/ResourceBase',

  'ovivo'
], (ResourceBase) ->
  ResourceBase.extend
    common: {}

    tagName: 'li'
    className: 'template'

    template: Handlebars.templates['template']
    groupTemplate: Handlebars.templates['template_group']

    events:
      'click': 'processClick'

    processClick: () ->
      ovivo.desktop.pages.resources.view.showSubView('template')
      ovivo.desktop.pages.resources.view.subViews.template.edit @model

      ovivo.desktop.pages.resources.view.subViews.templates.highlight @$el

    _periods: (def) ->
      _periods = @model.periods()

      _str = ''

      if (typeof _periods isnt 'object') or ((_keys = _.keys _periods).length is 0)
        _str = gettext 'No periods attached'

      else
        _str = _.map(_.keys(_periods), (id) ->
          _period = ovivo.desktop.resources.periods.get(id)

          _period.view.start_date() + ' – ' + _period.view.end_date()).join ', '

      def.resolve _str

    periods: () ->
      _def = new $.Deferred()

      ovivo.desktop.resources.periods.def.done _.bind _.wrap(_def, @_periods), @

      _def

    initialize: () ->
      @proxyCall 'initialize', arguments

      true