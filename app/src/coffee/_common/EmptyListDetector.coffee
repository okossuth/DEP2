define [
], () ->
  _createAddHanler = (_empty, collection) ->
    () ->
      _empty.hide()

  _createRemoveHanler = (_empty, collection) ->
    () ->
      if collection.length is 0
        _empty.show()

  initEmptyListDetector: (collection) ->
    _empty = @$('ul li.empty')

    collection.on 'add', _createAddHanler(_empty, collection), @
    collection.on 'remove', _createRemoveHanler(_empty, collection), @

