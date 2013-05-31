var _ = require('underscore');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        concat: {
            css: {
                src: ['src/css/*.css', 'src/css/*/*.css', 'src/css/*/*/*.css', '!src/css/ie/*.css'],
                dest: 'dist/ovivo-desktop-employee.css',
                stdout: false
            },

            js: {
                src: ['src/js/preset.js', 'src/js/Backbone.sync.js', 'src/js/config.js'],
                dest: 'dist/ovivo-desktop-employee.js',
                stdout: false
            },

            'pre-manifest': {
                options: {
                    banner: '# <%= grunt.template.today("dddd, mmmm dS, yyyy, HH:MM:ss") %>\n'
                },

                src: [
                    'manifest/body.appcache'
                ],

                dest: 'manifest/body.with.banner.appcache'
            },

            manifest: {
                src: [
                    'manifest/header.appcache',
                    'manifest/body.with.banner.appcache'
                ],

                dest: 'app.appcache'
            },

            ie: {
                src: ['src/css/ie/*.css'],
                dest: 'dist/ovivo-desktop-employee-ie.css'
            }
        },

        shell: {
            optimize: {
                command: 'r.js.cmd -o src/js/build.js optimize=none generateSourceMaps=true preserveLicenseComments=false',
                stdout: false
            },

            minify: {
                command: 'r.js.cmd -o src/js/build.min.js optimize=uglify2 generateSourceMaps=true preserveLicenseComments=false',
                stdout: false
            },

            templates: {
                command: 'handlebars src/templates -f dist/templates.js',
                stdout: false
            },

            'closure-compiler': {
                command: 'java -jar ../../tools/closure-compiler/compiler.jar --js ovivo-desktop-employee-require.js --js_output_file ovivo-desktop-employee-require.min.js --compilation_level SIMPLE_OPTIMIZATIONS --create_source_map ovivo-desktop-employee-require.min.js.map',
                options: {
                    execOptions: {
                        cwd: './dist'
                    }
                },
                stdout: false
            }
        },

        translate: {
            en: {
                dict: 'i18n/original.json',
                src: 'app.untranslated.html',
                dest: 'app.html'
            }, 
            da: {
                dict: 'i18n/da.json',
                src: 'app.untranslated.html',
                dest: 'app_da-DK.html'
            }
        },

        dictionary: {
            main: {
                items: [{
                    path: 'src/js/',
                    global: /\bgettext\(.+?\)/g,
                    local: /\bgettext\(\'(.+?)\'\)/,
                    ignore: ['preset.js']
                }, {
                    path: 'src/js/',
                    global: /\bngettext\(.+?\)/g,
                    local: /\bngettext\(\'(.+?)\', ?\'(.+?)\',.*?\)/,
                    ignore: ['preset.js']
                }, {
                    path: 'src/templates/',
                    global: /\{\{#i18n\}\}.+?\{\{\/i18n\}\}/g,
                    local: /\{\{#i18n\}\}(.+?)\{\{\/i18n\}\}/
                }, {
                    path: 'src/templates/',
                    global: /\{\{#i18n .+?\}\}.+?\|.+?\{\{\/i18n\}\}/g,
                    local: /\{\{#i18n .+?\}\}(.+?)\|(.+?)\{\{\/i18n\}\}/
                }, {
                    file: 'app.untranslated.html',
                    global: /\{\{#i18n\}\}.+?\{\{\/i18n\}\}/g,
                    local: /\{\{#i18n\}\}(.+?)\{\{\/i18n\}\}/
                }],

                result: 'i18n/original.json'
            }
        },

        dictapply: {
            da: {
                source: 'i18n/original.json',
                target: 'i18n/da.json'
            }
        },

        csso: {
            dist: {
                files: {
                    'dist/ovivo-desktop-employee.min.css': ['dist/ovivo-desktop-employee.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-csso')

    grunt.registerMultiTask('translate', 'Apply dictionary to file', function() {
        var src = grunt.file.read(this.data.src),
            dictStr = grunt.file.read(this.data.dict),
            dict = JSON.parse(dictStr);

        src = src.replace(/\{\{#i18n\}\}(.*?)\{\{\/i18n\}\}/g, function (match, str) {
            return (dict[str] !== undefined)? dict[str]: str;
        });

        delete dict['_COMMENT'];

        src = src.replace(/\{\{dictionary\}\}/, JSON.stringify(dict));

        grunt.file.write(this.data.dest, src);
    });

    (function () {
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

        grunt.registerMultiTask('dictionary', 'Search for strings, construct dictionary', function() {
            var _i, _arr = [], _obj = {};

            for (_i = 0; _i < this.data.items.length; _i += 1) {
                _arr = _arr.concat(_processItem.call(this.data.items[_i]));
            }

            _arr.sort();

            for (_i = 0; _i < _arr.length; _i += 1) {
                _obj[_arr[_i]] = _arr[_i];
            }

            grunt.file.write(this.data.result, JSON.stringify(_obj, null, 4));
        });

        grunt.registerMultiTask('dictapply', 'Search for strings, construct dictionary', function () {
            function outputSection (name, arr, target) {
                var _str = '"_COMMENT": "' + name.toUpperCase() + '",\n    ';

                return _str + _.map(arr, function (str) {
                    var _value;

                    if (typeof (_value = target[str]) === 'undefined') _value = str;

                    return '"' + str + '": "' + _value + '"';
                }).join(',\n    ');
            }

            return function () {
                var original = grunt.file.readJSON(this.data.source),
                    target = (function () {
                        var _json = grunt.file.readJSON(this.data.target);

                        delete _json['_COMMENT'];

                        return _json
                    }).call(this),
                    output = '',

                    oKeys = _.keys(original),
                    tKeys = _.keys(target),

                    _translated = _.filter(_.intersection(oKeys, tKeys), function (key) {
                        return original[key] !== target[key];
                    }),

                    _untranslated = _.difference(oKeys, _translated),
                    _unknown = _.difference(tKeys, oKeys);

                grunt.log.subhead('Translated (' + _translated.length + ')');
                grunt.log.writeln(grunt.log.wordlist(_translated, { color: 'green' }));

                grunt.log.subhead('Untranslated (' + _untranslated.length + ')');
                grunt.log.writeln(grunt.log.wordlist(_untranslated, { color: 'yellow' }));

                grunt.log.subhead('Unknown (' + _unknown.length + ')');
                grunt.log.writeln(grunt.log.wordlist(_unknown));

                output = '{\n';

                output += outputSection('Translated', _translated, target) + ',\n\n';

                output += outputSection('Untranslated', _untranslated, target) + ',\n\n';

                output += outputSection('Unknown', _unknown, target);

                output += '\n}';

                grunt.file.write(this.data.target, output);
            }
        } ());
    } ());

    // Default task.
    // grunt.registerTask('default', ['shell:templates', 'concat', 'shell:optimize', 'translate', 'concat:pre-manifest', 'concat:manifest']);

    grunt.registerTask('default', ['shell:templates', 'concat:css', 'concat:ie', 'concat:js', 'shell:optimize', 'translate']);
}; 