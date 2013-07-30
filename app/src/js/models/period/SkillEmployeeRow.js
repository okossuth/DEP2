define(['models/resources/ResourceBase', 'views/period/SkillEmployeeRow', 'ovivo'], function(ResourceBase, View) {
  return ResourceBase.extend({
    _gettersNames: ['pk', 'user', ['name', 'user']],
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
    addEvent: function(event, obj) {
      return this.view.addEvent(event, obj);
    },
    addHoursBlock: function(block) {
      return this.view.addHoursBlock(block);
    },
    initialize: function(attrs, options) {
      this.View = View;
      this._blocksCounter = 0;
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
