/*
 * grunt-pdiffy
 * 
 *
 * Copyright (c) 2013 Steven Sojka
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	var _ = require("lodash");
	var pdiffy = require("pdiffy");

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('pdiffy', 'Perceptual difference tool for grunt', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

		var done = this.async();

		var onCompareComplete = function(shot) {
			console.log(shot.data);
			done();
		};

		pdiffy.compare({
			paths: this.data.sources,
			captureOptions: this.options.capture,
			diffOptions: this.options.compare,
			callback: onCompareComplete
		});	
  });
};
