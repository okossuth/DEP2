module.exports = function(grunt) {
    grunt.registerMultiTask('dictionary', 'Search for strings, construct dictionary', (function () {
        function _buildHash (arr) {
            var _i, _obj = {};

            if (typeof arr === 'undefined') return _obj;

            for (_i = 0; _i < arr.length; _i += 1) {
                _obj[arr[_i]] = true;
            }

            return _obj;
        }

        function _processFile (abspath, rootdir, subdir, filename) {
            var src = '',
                _i = 0,
                _match = null,
                _stringMatch = null,
                _cur,
                _arr = [];

            if ((typeof filename !== 'undefined') && (this._ignore[filename] === true)) return [];

            src = grunt.file.read(abspath);
            _match = src.match(this.global);

            if (_match === null) return [];

            for (_i = 0; _i < _match.length; _i += 1) {
                _cur = _match[_i];

                if (_cur === null) continue;

                _stringMatch = _cur.match(this.local).slice(1);

                if (_stringMatch !== null) {
                    _arr = _arr.concat(_stringMatch);
                }
            }

            return _arr;
        }

        function _processItem () {
            var _ignore = _buildHash(this.ignore),
                _this = this,
                _arr = [];

            this._ignore = _ignore;

            if (typeof this.path === 'undefined') {
                _arr = _processFile.call(_this, this.file);

            } else {
                grunt.file.recurse(this.path, function () {
                    var _args = Array.prototype.slice.call(arguments, 0);

                    _arr = _arr.concat(_processFile.apply(_this, _args));
                });
            }

            return _arr;
        }

        return function() {
            var _i, _arr = [], _obj = {};

            for (_i = 0; _i < this.data.items.length; _i += 1) {
                _arr = _arr.concat(_processItem.call(this.data.items[_i]));
            }

            _arr.sort();

            for (_i = 0; _i < _arr.length; _i += 1) {
                _obj[_arr[_i]] = _arr[_i];
            }

            grunt.file.write(this.data.result, JSON.stringify(_obj, null, 4));
        };

    } ()));
};