define(['models/resources/Group', '_common/ResourceManagerBase', 'ovivo'], function(Model, ResourceManagerBase) {
  return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, {
    model: Model,
    fullResponse: true,
    url: "" + ovivo.config.API_URL_PREFIX + "groups/",
    createTree: (function() {
      var _processGroup, _processPD;
      _processGroup = function(group, name, level, pkRoot) {
        var _arr,
          _this = this;
        _arr = [];
        if (name !== '') {
          name += ' → ';
        }
        name += group.name();
        group.set('level', level);
        group.set('chainName', name);
        group.set('pkRoot', pkRoot);
        _arr.push({
          group: group,
          level: level
        });
        return _.reduce(group.children, (function(memo, pk) {
          return memo.concat(_processGroup.call(_this, _this.get(pk), name, level + 1, pkRoot));
        }), _arr);
      };
      _processPD = function(pd) {
        var _this = this;
        return {
          pd: pd,
          groups: _.reduce(this.filter(function(group) {
            return (group.primary_department() === pd.pk()) && (group.parent() === null);
          }), (function(memo, group) {
            return memo.concat(_processGroup.call(_this, group, '', 0, group.pk()));
          }), [])
        };
      };
      return function() {
        var _this = this;
        this.tree = ovivo.desktop.resources.primaryDepartments.map((function(pd) {
          return _processPD.call(_this, pd);
        }));
        return this.trigger('tree-ready', this.tree);
      };
    })(),
    setChildren: function() {
      var _this = this;
      return this.each(function(group) {
        var _parent;
        if ((_parent = group.parent()) != null) {
          return _this.get(group.parent()).children.push(group);
        }
      });
    },
    _ignoreChange: ['level', 'chainName', 'treeName', 'pkRoot'],
    initialize: function() {
      this.tree = [];
      this.initResource();
      this.def.then(_.bind(this.setChildren, this));
      $.when(ovivo.desktop.resources.municipalities.def, ovivo.desktop.resources.primaryDepartments.def, this.def).then(_.bind(this.createTree, this));
      return true;
    }
  }));
});
