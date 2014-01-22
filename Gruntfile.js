var loadGruntTasks = require('load-grunt-tasks');

module.exports = function(grunt) {
  loadGruntTasks(grunt);

  grunt.initConfig({
    statuspanel: {
      grunt: 'Gruntfile.js',
      main: 'index.js',
      lib: 'lib',
      test: 'test'
    }
  });


  grunt.config('jshint', {
    options: {
      bitwise: true,
      camelcase: true,
      curly: true,
      eqeqeq: true,
      forin: true,
      freeze: true,
      indent: 2,
      latedef: true,
      newcap: true,
      noarg: true,
      noempty: true,
      nonew: true,
      quotmark: 'single',
      unused: true,
      trailing: true,
      maxlen: 80,
      esnext: true,
      node: true
    },
    all: [
      '<%= statuspanel.grunt %>',
      '<%= statuspanel.main %>',
      '<%= statuspanel.lib %>/{,*/}*.js',
      '<%= statuspanel.test %>/{,*/}*.js',
    ]
  });
};