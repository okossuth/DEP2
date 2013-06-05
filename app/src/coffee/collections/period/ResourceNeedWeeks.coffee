define [
  'models/period/ResourceNeedWeek',

  '_common/CachableCollection',

  'ovivo'
], (Model, CachableCollection) ->
  Backbone.Collection.extend _.extend {}, CachableCollection.get(['pk']),
    model: Model

    addModel: (obj) ->
      _model = new Model obj

      @add _model

      _model

    getScrollData: () ->
      @map (model) ->
        el: model.view.el
        top: model.view.el.offsetTop
        height: model.view.el.offsetHeight

    initialize: () ->
      @initCacheProcessors()
      
      true