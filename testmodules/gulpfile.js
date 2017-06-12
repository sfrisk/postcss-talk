var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var lol = require('postcss-lolcat-stylesheets');


gulp.task('css', function () {
  var processors = [
    autoprefixer,
    cssnext,
    precss,
    lol,
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});