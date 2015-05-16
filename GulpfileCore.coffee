gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
sourcemaps = require 'gulp-sourcemaps'
del = require 'del'
react = require 'gulp-react'

myPaths = {
    dist: 'public'
    src: 'src'
}

gulp.task 'clean', (cb) ->
    del ["#{myPaths.dist}/**"], cb

gulp.task 'copy', ['clean'],  () ->
    gulp.src("#{myPaths.src}/**")
        .pipe gulp.dest myPaths.dist

gulp.task 'jsx', ['copy'], () ->
    gulp.src("#{myPaths.src}/**/*.jsx")
        .pipe react()
        .pipe gulp.dest myPaths.dist


gulp.task 'default', ['jsx']
