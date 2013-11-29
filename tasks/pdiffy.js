/*
 * grunt-pdiffy
 * 
 *
 * Copyright (c) 2013 Steven Sojka
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var pdiffy = require("pdiffy");

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('pdiffy', 'Perceptual difference tool for grunt', function () {

    var done = this.async();

    var onRunComplete = function(session) {
      grunt.event.emit("pdiffy", this.target, session, done);

      // If running a schedule or interval don't call done
      !this.data.schedule && !this.data.interval && done();
    };

    pdiffy.run(this.data, onRunComplete.bind(this));  
  });
};
