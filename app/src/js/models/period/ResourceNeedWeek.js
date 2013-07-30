define(['models/resources/ResourceBase', 'views/period/ResourceNeedWeek', 'ovivo'], function(ResourceBase, View) {
  return ResourceBase.extend({
    _gettersNames: ['resourceNeed', ['pk', 'resourceNeed'], ['start_time', 'resourceNeed'], ['end_time', 'resourceNeed']],
    clearScroll: function() {
      return this.view.clearScroll();
    },
    processScroll: function(obj, val) {
      return this.view.processScroll(obj, val);
    },
    addBlock: function(block) {
      this.view.addBlock(block);
      return this._blocksCounter += 1;
    },
    removeBlock: function(block) {
      this._blocksCounter -= 1;
      if (this._blocksCounter === 0) {
        return this.collection.remove(this);
      }
    },
    initialize: function(attrs, options) {
      this.set('pk', attrs.resourceNeed.pk());
      this.View = View;
      this._blocksCounter = 0;
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
