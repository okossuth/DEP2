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
      ovivo.desktop.pages.resources.view.subViews.template.setModel @model

    initialize: () ->
      @proxyCall 'initialize', arguments

      true
