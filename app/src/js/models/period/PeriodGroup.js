define(['_features/objsMerger', 'models/resources/ResourceBase', 'models/period/PeriodGroupEmployees', 'collections/period/ResourceNeedTimeGroups', 'views/period/PeriodGroup', 'ovivo'], function(objsMerger, ResourceBase, PeriodGroupEmployees, TimeGroups, View) {
  return ResourceBase.extend(objsMerger.funcMerge(PeriodGroupEmployees, {
    _gettersNames: ['pk', 'root', 'visible', 'frame'],
    clearScroll: function() {
      return this.view.clearScroll();
    },
    processScroll: function(obj, val) {
      return this.view.processScroll(obj, val);
    },
    addBlocks: function(blocks) {
      var _this = this;
      return _.each(blocks, function(b) {
        return _this.addBlock(b);
      });
    },
    _addBlockPartial: function(block) {
      var _key, _timeGroup;
      _key = ("" + (block.start_time()) + "-" + (block.end_time())).replace(/\:/g, '-');
      _timeGroup = this.timeGroups.get(_key);
      if (_timeGroup == null) {
        _timeGroup = this.timeGroups.addModel({
          pk: _key,
          start_time: block.start_time(),
          end_time: block.end_time(),
          startValue: block.resourceNeed().startValue()
        });
      }
      return _timeGroup.addBlock(block);
    },
    addBlock: function(block) {
      if (this._blocksHash[block.cid] != null) {
        return;
      }
      this._blocksHash[block.cid] = block;
      this._blocksHashCounter[block.cid] = block;
      return this._addBlockPartial(block);
    },
    addBlockHidden: function(block) {
      return this._blocksHashCounter[block.cid] = block;
    },
    _removeBlockPartial: function(block) {
      var _timeGroup;
      _timeGroup = block.timeGroup;
      if (_timeGroup != null) {
        return _timeGroup.removeBlock(block);
      }
    },
    removeBlock: function(block) {
      this._removeBlockPartial(block);
      delete this._blocksHash[block.cid];
      delete this._blocksHashCounter[block.cid];
      if (_.keys(this._blocksHashCounter).length === 0) {
        return this.collection.remove(this);
      }
    },
    processVisibility: function() {
      var _blocks;
      if (this._periodsInitFlag === false && this.visible() === true) {
        this._periodsInitFlag = true;
        _blocks = this.frame().periodBlocks.getBy('group', this.pk());
        return this.addBlocks(_blocks);
      }
    },
    initialize: function(attrs, options) {
      this.View = View;
      this._periodsInitFlag = false;
      this.on('change:visible', this.processVisibility, this);
      this.timeGroups = new TimeGroups();
      this.timeGroups.periodGroup = this;
      this._blocksHash = {};
      this._blocksHashCounter = {};
      this.proxyCall('initialize', arguments);
      this.set('root', ovivo.desktop.resources.groups.get(this.pk()).pkRoot());
      return true;
    }
  }));
});
