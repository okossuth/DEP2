module.exports = function(grunt) {
    grunt.registerMultiTask('translate', 'Apply dictionary to file', function() {
        var src = grunt.file.read(this.data.src),
            dictStr = grunt.file.read(this.data.dict),
            dict = JSON.parse(dictStr);

        src = src.replace(/\{\{#i18n\}\}(.*?)\{\{\/i18n\}\}/g, function (match, str) {
            return (dict[str] !== undefined)? dict[str]: str;
        });

        delete dict['_COMMENT'];

        src = src.replace(/\{\{dictionary\}\}/, JSON.stringify(dict));
        src = src.replace(/\{\{locale-code\}\}/, this.data.locale);

        grunt.file.write(this.data.dest, src);
    });
};