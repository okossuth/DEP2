define(['models/period/GroupFilter', 'ovivo'], function(Model) {
  return Backbone.Collection.extend({
    model: Model,
    comparator: function(model) {
      return model.name();
    },
    addGroup: function(model) {
      var _model, _root;
      _root = ovivo.desktop.resources.groups.get(model.root());
      _model = this.get(_root.pk());
      if (_model != null) {
        _model.count += 1;
      } else {
        _model = new Model({
          root: _root
        });
        this.add(_model);
      }
      if (this.activeGroup === null) {
        this.activeGroup = _model;
        _model.view.apply();
      }
      return model.set('visible', (this.activeGroup.pk() === model.root() ? true : false));
    },
    removeGroup: function(model) {
      var _model, _root;
      _root = ovivo.desktop.resources.groups.get(model.root());
      _model = this.get(_root.pk());
      if ((_model != null) && (_model.count -= 1) === 0) {
        this.remove(_model);
      }
      return true;
    },
    _cancelFilter: function(model) {
      _.each(this.periodGroups.getBy('root', model.pk()), function(model) {
        return model.set('visible', false);
      });
      return this.periodGroups._clearPrev();
    },
    _applyFilter: function(model) {
      return _.each(this.periodGroups.getBy('root', model.pk()), function(model) {
        return model.set('visible', true);
      });
    },
    handleApply: function(model) {
      if (this.activeGroup != null) {
        this._cancelFilter(this.activeGroup);
        this.activeGroup.view.cancel();
      }
      model.view.apply();
      return this._applyFilter(this.activeGroup = model);
    },
    processRemove: function(model) {
      if (model === this.activeGroup) {
        if (this.length > 0) {
          this.handleApply(this.activeGroup = this.at(0));
        } else {
          this.activeGroup = null;
        }
      }
      return true;
    },
    initialize: function(models, options) {
      this.activeGroup = null;
      this.on('apply', this.handleApply, this);
      this.on('remove', this.processRemove, this);
      this.periodGroups = options.periodGroups;
      this.periodGroups.on('add', this.addGroup, this);
      this.periodGroups.on('remove', this.removeGroup, this);
      return true;
    }
  });
});
