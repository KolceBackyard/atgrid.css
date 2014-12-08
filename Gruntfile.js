module.exports = function (grunt) {
  'use strict';

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    src: 'src',
    dist: 'dist'
  };

  // Configuration
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs stylus task
    watch: {
      stylus: {
        files: [
          '<%= config.src %>/*.styl'
        ],
        tasks: ['stylus', 'cssmin']
      }
    },

    // Converts Stylus file to CSS
    stylus: {
      compile: {
        options: {
          compress: false,
          paths: ['node_modules/grunt-contrib-stylus/node_modules']
        },
        files: {
          '<%= config.dist %>/atgrid.css': '<%= config.src %>/atgrid.styl'
        }
      }
    },

    // Compress CSS file
    cssmin: {
      compress: {
        files: {
          '<%= config.dist %>/atgrid.min.css': '<%= config.dist %>/atgrid.css'
        }
      }
    }
  });

  // Default task
  grunt.registerTask('default', [
    'stylus',
    'cssmin',
    'watch'
  ]);
};
