module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          //outputStyle: 'compressed'
        },
        files: {
          'global_change_lab/static/global_change_lab/css/app.css': [
            'scss/app.scss'
          ]
        }
      }
    },
    // processhtml: {
    //   dist: {
    //     files: {
    //       '/tmp/global_change_lab/1.html': ['http://localhost:8000/']
    //     }
    //   }
    // },
    uncss: {
      dist: {
        options: {
          urls: ['http://localhost:8000']
        },
        files: {
          'css/uncss.css': []
          }
        }
    },

    cssmin: {
      dist: {
        files: {
          'global_change_lab/static/global_change_lab/css/app.min.css': [ 'global_change_lab/static/global_change_lab/css/app.css' ]
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            src: 'bower_components/jquery/jquery.min.js',
            dest: 'global_change_lab/static/jquery.min.js',
            filter: 'isFile',
          },
          {
            src:          'bower_components/foundation/js/foundation.min.js',
            dest: 'global_change_lab/static/foundation/js/foundation.min.js',
            filter: 'isFile',
          },
          {
            src:          'bower_components/foundation/js/foundation/foundation.dropdown.js',
            dest: 'global_change_lab/static/foundation/js/foundation/foundation.dropdown.js',
            filter: 'isFile',
          },
        ]
      }

    },

    watch: {
      // grunt: { files: ['Gruntfile.js'] },
      //
      //
      django_templates: {
        files: [
          'skills/templates/skills/*.html',
          'skills/templates/skills/partials/*.html',
          'global_change_lab/templates/*.html',
          'global_change_lab/templates/partials/*.html'
        ],
        options: {
          livereload: true
        }
      },

      sass: {
        files: 'global_change_lab/static/global_change_lab/scss/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  // The difference between `grunt-sass` and `grunt-contrib-sass` is that
  // `grunt-contrib-sass` uses the ruby gem, whereas `grunt-sass` uses `node-sass`
  // which is a SASS compiler written in Javascript (as a node module).
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // grunt.registerTask('build', ['sass', 'processhtml', 'uncss']);
  grunt.registerTask('build', ['sass', 'copy']);
  // grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('default', ['build']);
}