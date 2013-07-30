define(['models/resources/ResourceBase', 'collections/period/ResourceNeedWeeks', 'views/period/ResourceNeedTimeGroup', 'ovivo'], function(ResourceBase, ResourceNeedWeeks, View) {
  return ResourceBase.extend({
    _gettersNames: ['pk', 'start_time', 'end_time', 'startValue'],
    clearScroll: function() {
      return this.view.clearScroll();
    },
    processScroll: function(obj, val) {
      return this.view.processScroll(obj, val);
    },
    addBlock: function(block) {
      var _resourceNeedWeek, _rn;
      block.timeGroup = this;
      _rn = block.resourceNeed();
      _resourceNeedWeek = this.resourceNeedWeeks.get(_rn.pk());
      if (_resourceNeedWeek == null) {
        _resourceNeedWeek = this.resourceNeedWeeks.addModel({
          resourceNeed: _rn
        });
      }
      _resourceNeedWeek.addBlock(block);
      return this._blocksCounter += 1;
    },
    removeBlock: function(block) {
      var _resourceNeedWeek;
      delete block.timeGroup;
      _resourceNeedWeek = this.resourceNeedWeeks.get(block.resourceNeed().pk());
      if (_resourceNeedWeek != null) {
        _resourceNeedWeek.removeBlock(block);
      }
      this._blocksCounter -= 1;
      if (this._blocksCounter === 0) {
        return this.collection.remove(this);
      }
    },
    initialize: function(attrs, options) {
      this.View = View;
      this.resourceNeedWeeks = new ResourceNeedWeeks();
      this._blocksCounter = 0;
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
