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
        _h = model.view.el.offsetHeight
        _t = model.view.el.offsetTop

        el: model.view.el
        model: model
        start: _t
        end: _t + _h
        height: _h

    initialize: () ->
      @initCacheProcessors()
      
      true