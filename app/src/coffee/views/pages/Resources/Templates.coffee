define [
  'views/pages/PageBase',

  'ovivo'
], (PageBase) ->
  PageBase.extend
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
      ovivo.desktop.pages.resources.view.subViews.template.createNew()

      @highlight()

      @$('.button-add-template').addClass('selected')

    addTemplate: (model) ->
      @$('ul.templates').append model.view.el
    
    initialize: () ->
      ovivo.desktop.resources.templates.on 'add', @addTemplate, @

      true