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

                options: {
                    stdout: false
                }
            },

            minify: {
                command: 'r.js.cmd -o src/js/build.min.js optimize=uglify2 generateSourceMaps=true preserveLicenseComments=false',

                options: {
                    stdout: false
                }
            },

            templates: {
                command: 'handlebars src/templates -f dist/templates.js',

                options: {
                    stdout: false
                }
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
                dest: 'app.html',
                locale: 'en-GB'
            },

            da: {
                dict: 'i18n/da.json',
                src: 'app.untranslated.html',
                dest: 'app_da-DK.html',
                locale: 'da-DK'
            },

            ru: {
                dict: 'i18n/ru.json',
                src: 'app.untranslated.html',
                dest: 'app_ru-RU.html',
                locale: 'ru-RU'
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
            },

            ru: {
                source: 'i18n/original.json',
                target: 'i18n/ru.json'
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
    grunt.loadNpmTasks('grunt-csso');

    grunt.loadTasks('tasks');

    // Default task.
    // grunt.registerTask('default', ['shell:templates', 'concat', 'shell:optimize', 'translate', 'concat:pre-manifest', 'concat:manifest']);

    grunt.registerTask('default', ['shell:templates', 'concat:css', 'concat:ie', 'concat:js', 'shell:optimize', 'translate']);
    grunt.registerTask('travis', ['translate']);
}; 