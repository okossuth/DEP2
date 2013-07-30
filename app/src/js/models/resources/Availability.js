define(['models/resources/ResourceBase', 'views/resources/Availability', 'ovivo'], function(ResourceBase, View) {
  return ResourceBase.extend({
    typeName: 'availability',
    _gettersNames: ['pk', 'start', 'end', 'available', 'time_span', 'group', 'user'],
    _getTimeValue: function(str) {
      var _obj;
      _obj = new Date(Date.parse(str));
      return _obj.getHours() * 60 + _obj.getMinutes();
    },
    getView: function() {
      return new View({
        model: this
      });
    },
    initialize: function(attrs, options) {
      this.proxyCall('initialize', arguments);
      this.set('pk', this.cid);
      this.startValue = this._getTimeValue(this.start());
      this.endValue = this._getTimeValue(this.end());
      if (this.endValue < this.startValue) {
        this.endValue += 24 * 60;
      }
      return true;
    }
  });
});
