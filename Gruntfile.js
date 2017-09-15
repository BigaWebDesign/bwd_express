module.exports = function(grunt) {

      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            pug: {
                files: ['templates/pug/**/*.pug'],
                tasks: ['pug'],
                options:{
                    interrupt: true
                }
            }
        },
        pug:{
            compile: {
                options: {
                    pretty: true
                    }
                },
                files: [{
                    src: ['**/*.pug', '!**/*.pug'],
                    dest: "templates/pages/",
                    ext: ".html",
                    cwd: "templates/pug/",
                    expand: true
                }]
            }
        });


      grunt.loadNpmTasks('grunt-contrib-pug');
      grunt.loadNpmTasks('grunt-contrib-watch');
    
      grunt.registerTask('default', ['watch']);
      grunt.registerTask('default', ['pug']);
    
    };