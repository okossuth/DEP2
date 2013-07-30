define([], function() {
  var _PercentageIndicator;
  _PercentageIndicator = function(container, width, height, value) {
    var _ref, _ref1, _ref2, _ref3;
    this.container = $(container);
    this.canvas = $('canvas', this.container);
    this.valueSpan = $('.value', this.container);
    this.value = value;
    this.ctx = (_ref = this.canvas[0]) != null ? _ref.getContext('2d') : void 0;
    _ref1 = [width, height], (_ref2 = this.canvas[0]) != null ? _ref2.width = _ref1[0] : void 0, (_ref3 = this.canvas[0]) != null ? _ref3.height = _ref1[1] : void 0;
    this._render();
    return this;
  };
  _PercentageIndicator.prototype._render = function() {
    if (this.ctx != null) {
      this.ctx.beginPath();
      this.ctx.arc(50, 50, 40, 1.5 * Math.PI - 2 * Math.PI * (this.value / 100), 1.5 * Math.PI);
      this.ctx.strokeStyle = "007550";
      this.ctx.lineWidth = 7;
      this.ctx.stroke();
      this.valueSpan.html(this.value + '%');
    }
    return true;
  };
  return _PercentageIndicator;
});
