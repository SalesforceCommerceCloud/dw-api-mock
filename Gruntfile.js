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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');

    grunt.registerTask('default', ['jshint', 'jscs']);
};
