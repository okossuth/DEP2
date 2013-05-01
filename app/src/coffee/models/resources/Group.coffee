define [
  'models/resources/ResourceBase',

  'ovivo-ella'
], (ResourceBase, View) ->
  ResourceBase.extend
    _gettersNames: [
      'name'
      'chainName'
      'parent'
      'primary_department'
      'children'
      'allowed'
      'pk'
    ]

    setChainName: () ->
      _str = @name()
      _cur = @

      while (_cur = @collection.get(_cur.parent()))?
        _str = _cur.name() + ' - ' + _str

      @set 'chainName', _str

      true

    initialize: (attrs, options) ->
      @set 'children', []

      @proxyCall 'initialize', arguments

      @setChainName()

      true