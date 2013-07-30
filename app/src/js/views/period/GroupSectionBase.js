define(['ovivo'], function() {
  return {
    _animateFolding: function(_val, val) {
      var _frac;
      if (_val !== val) {
        _frac = (val - _val) / this.MIN_BLOCK_HEIGHT;
        this.el.style.opacity = Math.pow(1 - _frac, 2);
        this.$el.addClass('folding');
        if (ovivo.config.TRANSFORM !== false) {
          this.el.style[ovivo.config.TRANSFORM] = "translate(0, " + (this.MIN_BLOCK_HEIGHT * _frac) + "px) scale(" + (1 - 0.05 * Math.pow(_frac, 2)) + ") rotateX(" + (60 * Math.pow(_frac, 2)) + "deg)";
        }
      } else {
        this._clearFolding();
      }
      return true;
    },
    _animateHeader: function(_val, val) {
      if (ovivo.config.TRANSFORM !== false) {
        return this.header.style[ovivo.config.TRANSFORM] = "translate(0, " + _val + "px)";
      } else {
        return this.header.style.top = "" + _val + "px";
      }
    },
    _clearFolding: function() {
      this.el.style.opacity = '';
      this.$el.removeClass('folding');
      if (ovivo.config.TRANSFORM !== false) {
        this.el.style[ovivo.config.TRANSFORM] = '';
      }
      return true;
    },
    _clearHeader: function() {
      if (ovivo.config.TRANSFORM !== false) {
        return this.header.style[ovivo.config.TRANSFORM] = '';
      } else {
        return this.header.style.top = '';
      }
    }
  };
});
