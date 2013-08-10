define [
  '_features/dateFormatter',

  'views/resources/ResourceBase',

  'ovivo'
], (dateFormatter, ResourceBase) ->
  ResourceBase.extend
    common: {}
    tagName: 'li'
    className: 'comment'

    template: Handlebars.templates['comment']
    groupTemplate: Handlebars.templates['comment_group']

    pub_date: () ->
      if (_pub_date = @model.pub_date())?
        dateFormatter @model.pub_date()

      else ''

    initialize: () ->
      @proxyCall 'initialize', arguments

      true
