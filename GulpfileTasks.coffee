gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
sourcemaps = require 'gulp-sourcemaps'
del = require 'del'
react = require 'gulp-react'
usemin = require 'gulp-usemin'
less = require 'gulp-less'
LessPluginAutoPrefix = require 'less-plugin-autoprefix'
autoprefix = new LessPluginAutoPrefix { browsers: ["last 2 versions"] }

myPaths = {
    dist: 'public'
    src: 'src'
}

gulp.task 'clean', (cb) ->
    del [myPaths.dist], cb

gulp.task 'copy', ['clean'],  () ->
    gulp.src("#{myPaths.src}/**")
        .pipe gulp.dest myPaths.dist

gulp.task 'jsx', ['copy'], () ->
    gulp.src("#{myPaths.src}/**/*.jsx")
        .pipe react()
        .pipe gulp.dest myPaths.dist
        
gulp.task 'b', ['copy'], ()->
  gulp.src "#{myPaths.src}/*.html"
      .pipe usemin {
        css: [
          'concat'
        ]
        less: [
          less {
            plugins: [autoprefix]
          }
          'concat'
        ]
        js: ['concat']
        jsx: [react(),'concat']
      }
      .pipe gulp.dest myPaths.dist


gulp.task 'default', ['b']
