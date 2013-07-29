var _ = require('underscore');

module.exports = function(grunt) {
    grunt.registerMultiTask('dictapply', 'Search for strings, construct dictionary', (function () {
        var trailingComma = /,?\s*?\}$/m;

        function outputSection (name, arr, target) {
            var _str;

            if (arr.length === 0) { return ''; }

            _str = '"_COMMENT": "' + name.toUpperCase() + '",\n    ';

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

            output = output.replace(trailingComma, '\n}');

            grunt.file.write(this.data.target, output);
        };

    } ()));
};