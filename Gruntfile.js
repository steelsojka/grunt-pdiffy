/*
 * grunt-pdiffy
 * 
 *
 * Copyright (c) 2013 Steven Sojka
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    pdiffy: {
      default_options: {
        options: {
					shotSize: {
						width: "all",
						height: "all"
					},
					threshold: 32,
					mode: 'block'
        },
				captures: [
					{
						url: ["http://yahoo.com", "http://google.com"]
					} 
				]
      },
      schedule_options: {
        interval: 0.5,
        captures: [{
          url: "http://yahoo.com"
        }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.event.on("pdiffy", function() {
    console.log(arguments);
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'pdiffy', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
