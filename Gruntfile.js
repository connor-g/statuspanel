var loadGruntTasks = require('load-grunt-tasks');

module.exports = function(grunt) {
  loadGruntTasks(grunt);

  grunt.registerTask('test', [
    'jshint',
    'mochaTest'
  ]);

  /**
   * Initial Configuration
   */
  grunt.initConfig({
    statuspanel: {
      grunt: 'Gruntfile.js',
      main: 'index.js',
      lib: 'lib/{,*/}*.js',
      test: 'test/{,*/}*.js'
    }
  });

  /**
   * JsHint Settings
   */
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
    app: [
      '<%= statuspanel.grunt %>',
      '<%= statuspanel.main %>',
      '<%= statuspanel.lib %>'
    ]
  });

  /**
   * Mocha Test Settings
   */
  grunt.config('mochaTest', {
    test: {
      options: {
        reporter: 'spec'
      },
      src: ['<%= statuspanel.test %>']
    }
  });
};