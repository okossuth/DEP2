module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        concat: {
            css: {
                src: ['src/css/*.css', 'src/css/*/*.css', 'src/css/*/*/*.css'],
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
                command: 'r.js.cmd -o src/js/build.js optimize=none',
                stdout: false
            },

            templates: {
                command: 'handlebars src/templates -f dist/templates.js',
                stdout: false
            }
        },

        translate: {
            en: {
                dict: 'i18n/en.json',
                src: 'app.untranslated.html',
                dest: 'app.html'
            }, 
            da: {
                dict: 'i18n/da.json',
                src: 'app.untranslated.html',
                dest: 'app_da.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerMultiTask('translate', 'Apply dictionary to file', function() {
        var src = grunt.file.read(this.data.src),
            dictStr = grunt.file.read(this.data.dict),
            dict = JSON.parse(dictStr);

        src = src.replace(/\{\{#i18n\}\}(.*?)\{\{\/i18n\}\}/g, function (match, str) {
            return (dict[str] !== undefined)? dict[str]: str;
        });

        src = src.replace(/\{\{dictionary\}\}/, JSON.stringify(dict));

        grunt.file.write(this.data.dest, src);
    });

    // Default task.
    // grunt.registerTask('default', ['shell:templates', 'concat', 'shell:optimize', 'translate', 'concat:pre-manifest', 'concat:manifest']);

    grunt.registerTask('default', ['shell:templates', 'concat:css', 'concat:ie', 'concat:js', 'shell:optimize', 'translate']);
}; 