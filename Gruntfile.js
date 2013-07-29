module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            css: {
                src: ['app/src/css/**/*.css'],
                dest: 'app/dist/ovivo-desktop-employee.css'
            },

            css_ie: {
                src: ['app/src/css/ie/*.css'],
                dest: 'app/dist/ovivo-desktop-employee-ie.css'
            },

            js: {
                src: ['app/src/js/preset.js', 'app/src/js/Backbone.sync.js', 'app/src/js/config.js'],
                dest: 'app/dist/ovivo-desktop-employee.js'
            },

            options: {
                stdout: false
            }
        },

        bgShell: {
            runNode: {
                cmd: 'node server.js'
            },

            _defaults: {
                bg: true
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
        },

        watch: {
            handlebars: {
                files: 'app/src/templates/*.handlebars',
                tasks: ['handlebars', 'requirejs']
            },

            coffee: {
                files: 'app/src/coffee/**/*.coffee',
                tasks: ['coffee', 'requirejs']
            },

            sass: {
                files: 'app/src/sass/**/*.sass',
                tasks: ['sass', 'concat:css']
            },

            sass_ie: {
                files: 'app/src/sass/ie/*.sass',
                tasks: ['sass', 'concat:css_ie']
            },

            translate: {
                files: 'app/app.untranslated.html',
                tasks: ['translate']
            },

            plain_js: {
                files: ['app/src/js/preset.js', 'app/src/js/Backbone.sync.js', 'app/src/js/config.js'],
                tasks: ['concat:js', 'requirejs']
            }
        },

        coffee: {
            compile: {
                options: {
                    bare: true
                },

                files: [{
                    expand: true,
                    pwd: 'app/src/coffee/',
                    src: ['**/*.coffee'],
                    dest: 'app/src/js/',
                    rename: function (dest, src) {
                        return src.replace(/coffee/g, 'js');
                    }
                }]
            }
        },

        sass: {
            compile: {
                files: [{
                    expand: true,
                    pwd: 'app/src/sass/',
                    src: ['**/*.sass'],
                    dest: 'app/src/css/',
                    rename: function (dest, src) {
                        return src.replace(/sass/g, 'css');
                    }
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-bg-shell');
    grunt.loadNpmTasks('grunt-csso');

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['coffee', 'sass', 'handlebars', 'translate', 'concat', 'requirejs']);

    grunt.registerTask('dev', ['bgShell:runNode', 'watch']);
    grunt.registerTask('travis', ['default']);
}; 