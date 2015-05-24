gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
sourcemaps = require 'gulp-sourcemaps'
source = require 'vinyl-source-stream'
del = require 'del'
react = require 'gulp-react'
usemin = require 'gulp-usemin'
less = require 'gulp-less'
LessPluginAutoPrefix = require 'less-plugin-autoprefix'
autoprefix = new LessPluginAutoPrefix {browsers: ["last 2 versions"]}
browserify = require 'browserify'
reactify = require 'reactify'

myPaths = {
  dist: 'public'
  src: 'src',
  bootstrap: 'src/scripts/app.jsx'
}

gulp.task 'clean', (cb) ->
  del ["#{myPaths.dist}/**"], cb

gulp.task 'copy', ['clean'], () ->
  gulp.src("#{myPaths.src}/**")
  .pipe gulp.dest myPaths.dist

gulp.task 'bundle', [], ()->
  browserify myPaths.bootstrap
  .transform reactify
  .bundle()
  .pipe source 'bundle.js'
  .pipe gulp.dest "#{myPaths.dist}/scripts"

gulp.task 'less', ['copy'], () ->
  gulp.src("#{myPaths.src}/**/*.less")
  .pipe less {plugins: [autoprefix]}
  .pipe gulp.dest myPaths.dist

gulp.task 'build', ['copy'], ()->
  gulp.src "#{myPaths.src}/*.html"
  .pipe usemin {
    css: ['concat']
    less: [
      less {plugins: [autoprefix]}
      'concat'
    ]
    js: ['concat']
    jsx: [react(), 'concat']
  }
  .pipe gulp.dest myPaths.dist

gulp.task 'watch', [], ()->
  gulp.watch "#{myPaths.src}/**/*.jsx", (event)->
    browserify myPaths.bootstrap
    .transform reactify
    .bundle()
    .pipe source 'bundle.js'
    .pipe gulp.dest "#{myPaths.dist}/scripts"
    console.log "#{event.path} updated"

  gulp.watch "#{myPaths.src}/**/*.less", (event)->
    gulp.src(event.path, {base: myPaths.src})
    .pipe less {plugins: [autoprefix]}
    .pipe gulp.dest myPaths.dist
    console.log("#{event.path} updated")

  gulp.watch "#{myPaths.src}/**/*.html", (event)->
    gulp.src(event.path, {base: myPaths.src})
    .pipe gulp.dest myPaths.dist
    console.log("#{event.path} updated")


gulp.task 'default', ['build']
gulp.task 'debug', ['copy', 'bundle', 'less', 'watch']
