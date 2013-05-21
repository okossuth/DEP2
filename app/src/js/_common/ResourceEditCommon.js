// Generated by CoffeeScript 1.6.2
define([], function() {
  return {
    get: function(parentEvents) {
      return {
        events: _.extend({}, parentEvents, {
          'change .property-value': 'changeProperty',
          'click .button-add': 'add',
          'click .button-save': 'save',
          'click .button-delete': 'delete'
        }),
        propertyRegExp: /\bproperty-value-(\w+)\b/,
        changeProperty: function(e) {
          var _input, _name;

          _input = $(e.target).closest('.property-value');
          _name = this.propertyRegExp.exec(_input[0].className)[1];
          return this.model.set(_name, this.types[_name](_input.val()), {
            validate: true
          });
        },
        _getSyncHandler: function(collection, model) {
          var _handler;

          _handler = function() {
            collection.add(model);
            model.off('sync', _handler);
            return delete model.url;
          };
          return _handler;
        },
        _getSaveSyncHandler: function(collection, model, originalModel) {
          var _handler;

          _handler = function() {
            originalModel.set(model.toJSON());
            return model.off('sync', _handler);
          };
          return _handler;
        },
        _syncProcessor: function(handlerGetter) {
          this.model.on('sync', handlerGetter.call(this, this.collection, this.model, this.original));
          this.model.url = this.collection.url;
          if (this.model.id != null) {
            this.model.url += this.model.id + '/';
          }
          this.model.save();
          return this.close();
        },
        save: function() {
          return this._syncProcessor(this._getSaveSyncHandler);
        },
        add: function() {
          return this._syncProcessor(this._getAddSyncHandler);
        },
        "delete": function() {
          this.original.destroy();
          return this.close();
        },
        initCreateMode: function() {
          this.$('.create-mode').show();
          return this.$('.edit-mode').hide();
        },
        initEditMode: function() {
          this.$('.create-mode').hide();
          return this.$('.edit-mode').show();
        },
        _createEditCopy: function(model) {
          return new model.constructor(model.toJSON());
        },
        setModel: function(model) {
          var _this = this;

          this.original = model;
          this.model = this._createEditCopy(model);
          this.trigger('change:model', this.model);
          this.initEditMode();
          return _.each(this.fields, function(field) {
            var _date, _ref, _value;

            _value = _this.$('.property-value-' + field);
            if (_value.hasClass('datepicker')) {
              _date = new Date(Date.parse(_this.model[field]()));
              return _value.data('pickadate').setDate(_date.getFullYear(), _date.getMonth() + 1, _date.getDate());
            } else if (_value.hasClass('plain-value')) {
              return $.when(_this.model.view[field]()).done(function(_str) {
                return _value.html(_str);
              });
            } else {
              return _value.val((_ref = _this.model[field]()) != null ? _ref.toString() : void 0);
            }
          });
        }
      };
    }
  };
});
