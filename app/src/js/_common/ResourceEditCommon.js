define([], function() {
  return {
    get: function(parentEvents) {
      return {
        events: _.extend({}, parentEvents, {
          'change .property-value': 'processPropertyChange',
          'keyup .property-value': 'processPropertyChange',
          'click .button-add': 'add',
          'click .button-save': 'save',
          'click .button-delete': 'delete'
        }),
        propertyRegExp: /\bproperty-value-(\w+)\b/,
        modes: ['edit', 'create'],
        processPropertyChange: function(e) {
          var _input, _item, _name, _picker, _val, _value;
          _input = $(e.target).closest('.property-value');
          _item = $(e.target).closest('.item-content');
          _name = this.propertyRegExp.exec(_input[0].className)[1];
          if ((_picker = _input.pickadate('picker')) != null) {
            _val = _picker.get('select', 'yyyy-mm-dd');
          } else {
            _val = _input.val();
          }
          _value = this.types[_name](_val);
          if (_value === this.original[_name]()) {
            _item.removeClass('changed');
          } else {
            _item.addClass('changed');
          }
          return this.model.set(_name, _value, {
            validate: true
          });
        },
        _getAddSyncHandler: function(collection, model, originalModel) {
          var _handler;
          _handler = function() {
            collection.add(model);
            if (model.postEditSync != null) {
              model.postEditSync(collection, model, originalModel);
            }
            model.off('sync', _handler);
            return delete model.url;
          };
          return _handler;
        },
        _getSaveSyncHandler: function(collection, model, originalModel) {
          var _handler, _this;
          _this = this;
          _handler = function() {
            _this.clearChangeState();
            if (model.postEditSync != null) {
              model.postEditSync(collection, model, originalModel);
            }
            originalModel.set(model.toJSON(), {
              update: true
            });
            model.off('sync', _handler);
            return delete model.url;
          };
          return _handler;
        },
        _syncProcessor: function(handlerGetter) {
          this.model.on('sync', handlerGetter.call(this, this.collection, this.model, this.original));
          if (this.model.standaloneModel !== true) {
            this.model.url = this.collection.url;
            if (this.model.id != null) {
              this.model.url += this.model.id + '/';
            }
          } else {
            this.model.url = this.original.url;
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
        initMode: function(name) {
          var _hide,
            _this = this;
          _hide = _.without(this.modes, name);
          _.each(_hide, function(name) {
            return _this.$("." + name + "-mode").hide();
          });
          this.$("." + name + "-mode").show();
          this.$el.removeClass(_.map(_hide, function(name) {
            return "" + name + "-mode";
          }).join(' '));
          return this.$el.addClass("" + name + "-mode");
        },
        create: function(obj, mode) {
          if (mode == null) {
            mode = 'create';
          }
          this.createNew(obj, mode);
          return this.initMode(mode);
        },
        edit: function(model, mode) {
          if (mode == null) {
            mode = 'edit';
          }
          this.setModel(model, mode);
          return this.initMode(mode);
        },
        _createEditCopy: function(model) {
          var _copy;
          _copy = new model.constructor(model.toJSON());
          _copy.editCopy = true;
          if (_copy.finishCopy != null) {
            _copy.finishCopy(model);
          }
          return _copy;
        },
        _initComponents: function() {
          var _this = this;
          this._components = {};
          _.each(this.fields, function(field, i) {
            if (typeof field === 'object') {
              return _this[field.init](field.name, i);
            } else {
              return _this._components[field] = _this.$(".property-value-" + field);
            }
          });
          return this._initComponents = function() {};
        },
        attachHandlers: function() {},
        detachHandlers: function() {},
        clearChangeState: function() {
          return this.$('.changed').removeClass('changed');
        },
        setModel: function(model, mode) {
          var _this = this;
          this.clearChangeState();
          this._initComponents();
          this.original = model;
          if (this.model != null) {
            this.detachHandlers(mode);
          }
          this.model = this._createEditCopy(model);
          this.attachHandlers(mode);
          this.trigger('change:model', this.model);
          return _.each(this.fields, function(field) {
            var _component, _date, _v;
            if (typeof field === 'object') {
              _this[field.setValue](field.name, _this.model[field.name]());
              return true;
            }
            _component = _this._components[field];
            if (_component.hasClass('datepicker')) {
              _date = new Date(Date.parse(_this.model[field]()));
              _component.each(function(i, el) {
                return $(el).pickadate('picker').set('select', _date);
              });
            } else if (_component.hasClass('plain-value')) {
              $.when(_this.model.view[field]()).done(function(_str) {
                return _component.html(_str);
              });
            } else {
              _v = _this.model[field]();
              if (!(_v instanceof Array)) {
                _v = _v.toString();
              }
              _component.val(_v);
            }
            return true;
          });
        }
      };
    }
  };
});
