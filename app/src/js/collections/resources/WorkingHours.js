define(['models/resources/WorkingHour', '_common/ResourceManagerBase', '_common/CachableCollection', '_features/RuleCompiler', 'collections/period/HoursBlocks', 'ovivo'], function(Model, ResourceManagerBase, CachableCollection, RuleCompiler, HoursBlocks) {
  return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, CachableCollection.get(['groups', 'user', 'skills']), {
    model: Model,
    fullResponse: true,
    url: "" + ovivo.config.API_URL_PREFIX + "working-hours/",
    comparator: function(workingHour) {
      return Date.parse(workingHour.start_date()).valueOf();
    },
    preProcessJSON: (function() {
      var _processUser;
      _processUser = function(arr, user) {
        var _this = this;
        return _.map(arr, function(obj) {
          obj.user = user;
          return obj;
        });
      };
      return function(resp) {
        return Array.prototype.concat.apply([], _.map(resp, _.bind(_processUser, this)));
      };
    })(),
    _recalcSkillsCache: function() {
      return this.recalculateCache(['skills']);
    },
    getBlocks: function(skills, groups, start, end) {
      var _arr, _blocks, _match;
      start = new Date(Date.parse(start));
      end = new Date(Date.parse(end));
      _arr = [];
      _match = _.intersection(this.getBy('skills', skills), this.getBy('groups', groups));
      _.map(_match, function(wh) {
        return _arr = _arr.concat(RuleCompiler.compile(start, end, wh.start_date(), wh.end_date(), wh.repeat(), wh.weekdaysHash, {
          workingHour: wh
        }));
      });
      _blocks = new HoursBlocks;
      return _blocks.add(_arr);
    },
    initialize: function() {
      this.initResource();
      this.initCacheProcessors();
      $.when(this.def, ovivo.desktop.resources.users.def).done(_.bind(this._recalcSkillsCache, this));
      return true;
    }
  }));
});
