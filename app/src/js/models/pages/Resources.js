define(['models/pages/PageBase', 'views/pages/Resources/Page', 'ovivo'], function(PageBase, View) {
  return PageBase.extend({
    saveState: false,
    menuFlag: false,
    initialize: function(attrs, options) {
      this.View = View;
      this.proxyCall('initialize', arguments);
      return true;
    }
  });
});
