module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            css: {
                src: ['app/src/css/**/*.css'],
                dest: 'app/dist/ovivo-desktop-employee.css'
            },

            js: {
                src: ['app/src/js/preset.js', 'app/src/js/Backbone.sync.js', 'app/src/js/config.js'],
                dest: 'app/dist/ovivo-desktop-employee.js'
            },

            ie: {
                src: ['app/src/css/ie/*.css'],
                dest: 'app/dist/ovivo-desktop-employee-ie.css'
            },

            options: {
                stdout: false
            }
        },

        shell: {
            optimize: {
                command: 'r.js.cmd -o app/src/js/build.js optimize=none generateSourceMaps=true preserveLicenseComments=false'
            },

            minify: {
                command: 'r.js.cmd -o app/src/js/build.min.js optimize=uglify2 generateSourceMaps=true preserveLicenseComments=false'
            },

            templates: {
                command: 'handlebars app/src/templates -f app/dist/templates.js'  
            },

            options: {
                stdout: false
            }
        },

        translate: {
            en: {
                dict: 'app/i18n/original.json',
                src: 'app/app.untranslated.html',
                dest: 'app/app.html',
                locale: 'en-GB'
            },

            da: {
                dict: 'app/i18n/da.json',
                src: 'app/app.untranslated.html',
                dest: 'app/app_da-DK.html',
                locale: 'da-DK'
            },

            ru: {
                dict: 'app/i18n/ru.json',
                src: 'app/app.untranslated.html',
                dest: 'app/app_ru-RU.html',
                locale: 'ru-RU'
            }
        },

        handlebars: {
            compile: {
                src: ['app/src/templates/*.handlebars'],
                dest: 'app/dist/templates.js'
            },

            options: {
                namespace: 'Handlebars.templates',

                processName: function (filePath) {
                    return filePath.match(/\/(\w+)\.handlebars$/)[1];
                }
            }
        },

        dictionary: {
            main: {
                items: [{
                    path: 'app/src/js/',
                    global: /\bgettext\(.+?\)/g,
                    local: /\bgettext\(\'(.+?)\'\)/,
                    ignore: ['preset.js']
                }, {
                    path: 'app/src/js/',
                    global: /\bngettext\(.+?\)/g,
                    local: /\bngettext\(\'(.+?)\', ?\'(.+?)\',.*?\)/,
                    ignore: ['preset.js']
                }, {
                    path: 'app/src/templates/',
                    global: /\{\{#i18n\}\}.+?\{\{\/i18n\}\}/g,
                    local: /\{\{#i18n\}\}(.+?)\{\{\/i18n\}\}/
                }, {
                    path: 'app/src/templates/',
                    global: /\{\{#i18n .+?\}\}.+?\|.+?\{\{\/i18n\}\}/g,
                    local: /\{\{#i18n .+?\}\}(.+?)\|(.+?)\{\{\/i18n\}\}/
                }, {
                    file: 'app/app.untranslated.html',
                    global: /\{\{#i18n\}\}.+?\{\{\/i18n\}\}/g,
                    local: /\{\{#i18n\}\}(.+?)\{\{\/i18n\}\}/
                }],

                result: 'app/i18n/original.json'
            }
        },

        dictapply: {
            da: {
                source: 'app/i18n/original.json',
                target: 'app/i18n/da.json'
            },

            ru: {
                source: 'app/i18n/original.json',
                target: 'app/i18n/ru.json'
            }
        },

        csso: {
            dist: {
                files: {
                    'app/dist/ovivo-desktop-employee.min.css': ['app/dist/ovivo-desktop-employee.css']
                }
            }
        },

        requirejs: {
            compile: {
                options: grunt.file.readJSON('app/src/js/build.js')
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-csso');

    grunt.loadTasks('tasks');

    // Default task.
    // grunt.registerTask('default', ['shell:templates', 'concat', 'shell:optimize', 'translate', 'concat:pre-manifest', 'concat:manifest']);

    grunt.registerTask('default', ['shell:templates', 'concat:css', 'concat:ie', 'concat:js', 'shell:optimize', 'translate']);
    grunt.registerTask('travis', ['translate']);
}; 