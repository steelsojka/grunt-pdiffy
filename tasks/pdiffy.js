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
	var noop = function() {};

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('pdiffy', 'Perceptual difference tool for grunt', function () {

		var done = this.async();

		this.data.callback = this.data.callback || function(data, session, done) { done() };

		var onRunComplete = function(session) {
			this.data.callback(session, done);
		};

		pdiffy.run(this.data, onRunComplete.bind(this));	
  });
};
