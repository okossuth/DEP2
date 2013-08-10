define [
  'ovivo'
], () ->
  navigate: () ->
    _key = @_getKey.apply @, Array.prototype.slice.call arguments, 0

    if @_isToday.apply(@, Array.prototype.slice.call arguments, 0) is true
      @processToday()

    else
      @processNotToday()

    if not (_collector = @collectors.get _key)?
      _collector = @collectors.addElement @_getObj.apply @, Array.prototype.slice.call arguments, 0

    @collectors.show _collector

    true

  processToday: () ->
    @todayButton.addClass 'disabled'

  processNotToday: () ->
    @todayButton.removeClass 'disabled'

  processCollectorAdd: (collector, collectors) -> @collectorsList.append collector.view.el

  _initialize: () ->
    @collectors = new @Collectors()

    @collectors.on 'add', @processCollectorAdd, @

    @collectors.on 'show', @processCollectorShow, @
    @collectors.on 'hide', @processCollectorHide, @

    true