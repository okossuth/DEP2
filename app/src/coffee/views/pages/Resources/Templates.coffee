define [
  'views/pages/PageBase',

  '_common/EmptyListDetector',

  'ovivo'
], (PageBase, EmptyListDetector) ->
  PageBase.extend _.extend {}, EmptyListDetector,
    el: '.page.page-resources .content-templates'

    name: 'templates'

    events:
      'click .button-add-template': 'createTemplate'

    highlight: (el) ->
      @$el.addClass 'selected'

      if el? then $(el).addClass 'selected'

      true

    removeHighlight: () ->
      @$el.removeClass 'selected'

      @$('.selected').removeClass 'selected'

    createTemplate: () ->
      ovivo.desktop.pages.resources.view.showSubView('template')
      ovivo.desktop.pages.resources.view.subViews.template.create()

      @removeHighlight()
      @highlight()

      @$('.button-add-template').addClass('selected')

    addTemplate: (model) ->
      @$('ul.templates').append model.view.el
    
    initialize: () ->
      @initEmptyListDetector ovivo.desktop.resources.templates
      
      ovivo.desktop.resources.templates.on 'add', @addTemplate, @

      true