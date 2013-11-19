/*global module:false*/
module.exports = function (grunt) {
    var fs = require('fs');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
                ' Licensed <%= pkg.license %> */'
        },

        jshint: {
            src: ["./index.js"],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        lint: {
            files: [
                'index.js'
            ]
        },

        it: {
            all: {
                src: 'test/**/*.test.js',
                options: {
                    reporter: 'dot'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
                    ' Licensed <%= pkg.license %> */\n',
                report: 'min'
            },
            min: {
                files: {
                    '<%= pkg.name %>.min.js': ['index.js']
                }
            }
        },

    });

    // Default task.
    grunt.registerTask('default', ['jshint', 'it:all', 'uglify:min']);
    grunt.loadNpmTasks('grunt-it');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};
