# grunt-pdiffy

> Perceptual difference tool for grunt

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pdiffy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pdiffy');
```

## The "pdiffy" task

### Overview
In your project's Gruntfile, add a section named `pdiffy` to the data object passed into `grunt.initConfig()`.
```js
grunt.initConfig({
  pdiffy: {
    "your_target": {
      // Regular pdiffy config
    }
  }
});
```
### Config

The config is the same object you would pass into pdiffy.
View [pdiffy documentation](https://github.com/steelsojka/pdiffy) for more information.

### Usage Examples

#### Basic Difference
In this example, we perform a difference between our local site and production site
everytime the task is run.

```js
grunt.initConfig({
  pdiffy: {
    prod: {
      output: "./differences/session.pdiffy",
      timestamp: true,
      captures: [{
        url: ["http://localhost", "http://mysite.com"]
      }]
    }
  }
})
```

#### Schedules
In this example, we perform a difference every hour. This is usually something
you would want to run as a background task.

```js
grunt.initConfig({
  pdiffy: {
    target: {
      output: "./difference/session.pdiffy",
      schedule: {
        minutes: 0
      },
      captures: [{
        url: ["http://localhost", "http://mysite.com"]
      }]
    }
  }
})
```
#### Intervals
In this example, we perform a difference every 5 minutes. This is usually something
you would want to run as a background task.

```js
grunt.initConfig({
  pdiffy: {
    target: {
      output: "./difference/session.pdiffy",
      interval: 5,
      captures: [{
        url: ["http://localhost", "http://mysite.com"]
      }]
    }
  }
})
```

### Events
When a job is finished the data can get passed to have custom handling.
The `pdiffy` event is fired and passed 3 parameters, the target, resulting session data, and a done callback to 
terminate the grunt task.

```js
grunt.event.on('pdiffy', function(target, session, done) {
  // Session data contains the same data as would get output to a file
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Steven Sojka. Licensed under the MIT license.
