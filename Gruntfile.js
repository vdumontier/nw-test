module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
        appName: "nw-test",
        platforms: ['win'],
        buildDir: './dist',
        version: "0.12.2"
      },
      src: ['./public/**/*']
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['nodewebkit']);
};
