define(['models/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    typeName: 'group',
    _gettersNames: ['pk', 'name', 'primary_department', 'parent', 'level', 'treeName', 'chainName', 'pkRoot'],
    levelChange: function() {
      var _level;
      _level = this.level();
      return this.set('treeName', Array(_level + 1).join('\u2003') + '\u21b3 ' + this.name());
    },
    initialize: function(attrs, options) {
      this.children = [];
      this.on('change:level', this.levelChange, this);
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
