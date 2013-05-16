define [
  'ovivo'
], () ->
  Backbone.Collection.extend
    _initialize: () ->
      @initCacheProcessors()

      true