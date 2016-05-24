module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: [
                '**/*.js',
                '!node_modules/**/*.*'
            ]
        },

        jscs: {
            files: '<%= jshint.files %>'
        },

        watch: {
            js: {
                files: '<%= jshint.files %>',
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jscs');

    grunt.registerTask('default', ['jshint', 'jscs']);
};
