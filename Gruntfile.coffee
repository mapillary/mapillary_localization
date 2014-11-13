# Build configurations.
module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("./package.json")

    bake:
      compile:
        files:
          "<%= pkg.name %>.coffee.baked": "./<%=pkg.name%>.coffee"

    coffee:
      compile:
        files: [
          src: "<%= pkg.name %>.coffee.baked"
          dest: "./<%=pkg.name%>.js"
        ]
        options:
          bare: false

  loadNpmTasks = (tasks) ->
    for dep, ver of tasks when dep.match("grunt-contrib")
      grunt.loadNpmTasks dep

  grunt.loadNpmTasks( "grunt-bake" )

  pkg = grunt.file.readJSON("./package.json")
  loadNpmTasks pkg.dependencies
  grunt.registerTask "default", ["bake", "coffee"]