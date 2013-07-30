define(['views/resources/ResourceBase', 'ovivo'], function(ResourceBase) {
  return ResourceBase.extend({
    common: {},
    tagName: 'li',
    className: 'resource-block',
    template: Handlebars.templates['resourceBlock'],
    groupTemplate: Handlebars.templates['resourceBlock_group'],
    events: {
      'click': 'processClick'
    },
    processClick: function() {
      ovivo.desktop.popups.periodBlockPopup.render({
        groups: _.map(this.model.groupsHash, function(arr, pk) {
          return {
            groupName: ovivo.desktop.resources.groups.get(pk).chainName(),
            hours: _.map(arr, function(hour) {
              return {
                name: ovivo.desktop.resources.users.get(hour.user()).name(),
                start_time: hour.start_time(),
                end_time: hour.end_time()
              };
            })
          };
        }),
        block: this
      });
      ovivo.desktop.popups.periodBlockPopup.show();
      return true;
    },
    _getTimeObj: function(field) {
      var _hours, _minutes, _obj, _ref, _ref1;
      _obj = new Date(Date.parse(this.date()));
      _ref = this[field]().split(':'), _hours = _ref[0], _minutes = _ref[1];
      _ref1 = [parseInt(_hours), parseInt(_minutes)], _hours = _ref1[0], _minutes = _ref1[1];
      _obj.setHours(_hours);
      return _obj.setMinutes(_minutes);
    },
    updateGroup: function(group) {
      return this.$(".group-" + group + " .available").html(this.model.groupsHash[group].length);
    },
    postRender: function() {
      return this.$('.required').html(this.num_employees());
    },
    groups: function() {
      var _this = this;
      return _.map(this.model.groups(), function(pk) {
        var _ref;
        return {
          pk: pk,
          num_employees: _this.num_employees(),
          available: (_ref = _this.model.groupsHash[pk]) != null ? _ref.length : void 0
        };
      });
    },
    adjustPosition: function(start, range, height) {
      var _end, _scale, _start;
      _start = this._getTimeObj('start_time');
      _end = this._getTimeObj('end_time');
      _scale = height / range;
      if (_end < _start) {
        _end.setDate(_end.getDate() + 1);
      }
      return this.$el.css({
        'height': "" + (Math.floor((_end - _start) * _scale)) + "px",
        'line-height': "" + (Math.floor((_end - _start) * _scale) - 4) + "px",
        'top': "" + (Math.floor((_start - start) * _scale)) + "px"
      });
    },
    initialize: function() {
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
