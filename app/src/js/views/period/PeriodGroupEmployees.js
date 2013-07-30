define(['ovivo'], function() {
  return {
    postRender: function() {
      var _this = this;
      this.skillGroups = this.$('.skill-groups');
      this.addSkillGroups(this.model.skillGroups.map(function(t) {
        return t;
      }));
      return this.model.skillGroups.on('add', this.addSkillGroups, this);
    },
    addSkillGroups: function(skillGroups) {
      return this._addViewSorted(this.skillGroups, this.model.skillGroups, skillGroups);
    }
  };
});
