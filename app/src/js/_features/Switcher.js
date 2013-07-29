define(['ovivo'], function() {
  var _Switcher;
  _Switcher = function(container, data) {
    this.container = container;
    container.children().each(function(i, el) {
      return $(el).addClass('switcher-option').data('value', data[i]);
    });
    container.on('click', _.bind(this._clickHandler, this));
    return this;
  };
  _.extend(_Switcher.prototype, Backbone.Events);
  _Switcher.prototype.clear = function() {
    return $('.switcher-option.selected', this.container).removeClass('selected');
  };
  _Switcher.prototype._clickHandler = function(e) {
    var _el;
    _el = $(e.target).closest('.switcher-option');
    if (_el.length > 0) {
      this.clear();
      _el.addClass('selected');
      this.trigger('value', _el.data('value'));
    }
    return true;
  };
  _Switcher.prototype.setValue = function(value) {
    this.clear();
    $('.switcher-option', this.container).filter(function(i, el) {
      return $(el).data('value') === value;
    }).addClass('selected');
    return this.trigger('value', value);
  };
  return _Switcher;
});
