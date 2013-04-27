define [
  'ovivo'
], () ->
  navigate: () ->
    _key = @_getKey.apply @, Array.prototype.slice.call arguments, 0

    if not (_collector = @collectors.get _key)?
      _collector = @collectors.addElement @_getObj.apply @, Array.prototype.slice.call arguments, 0

    @collectors.show _collector

    true

  processCollectorAdd: (collector, collectors) -> @collectorsList.append collector.view.el

  _initialize: () ->
    @collectors = new @Collectors()

    @collectors.on 'add', @processCollectorAdd, @

    @collectors.on 'show', @processCollectorShow, @
    @collectors.on 'hide', @processCollectorHide, @

    true