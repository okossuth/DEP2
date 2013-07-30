define(['collections/period/SkillGroups', 'ovivo'], function(SkillGroups) {
  return {
    _addBlockPartial: function(block) {
      var _key, _skillGroup;
      _key = block.skill();
      _skillGroup = this.skillGroups.get(_key);
      if (_skillGroup == null) {
        _skillGroup = this.skillGroups.addModel({
          pk: _key,
          group: block.group(),
          frame: this.frame()
        });
      }
      return _skillGroup.addBlock(block);
    },
    _removeBlockPartial: function(block) {
      var _key, _ref, _skillGroup;
      if (((_ref = block.resourceNeed().changed) != null ? _ref.skill : void 0) != null) {
        _key = block.resourceNeed().previous('skill');
      } else {
        _key = block.skill();
      }
      _skillGroup = this.skillGroups.get(_key);
      if (_skillGroup != null) {
        return _skillGroup.removeBlock(block);
      }
    },
    addEvent: function(event) {
      var _group;
      if ((_group = this.skillGroups.get(event.skill())) != null) {
        _group.addEvent(event);
      }
      return true;
    },
    removeEvent: function(event) {
      var _group;
      if ((_group = this.skillGroups.get(event.skill())) != null) {
        _group.removeEvent(event);
      }
      return true;
    },
    addHoursBlock: function(block) {
      var _this = this;
      return ovivo.desktop.resources.users.def.done(function() {
        _.each(block.skills(), function(skill) {
          var _group;
          if ((_group = _this.skillGroups.get(skill)) != null) {
            return _group.addHoursBlock(block);
          }
        });
        return true;
      });
    },
    removeHoursBlock: function(block) {},
    initialize: function() {
      this.skillGroups = new SkillGroups();
      return this.skillGroups.periodGroup = this;
    }
  };
});
