var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var lol = require('postcss-lolcat-stylesheets');
// var mymodule = require('mymodule');

gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 10 versions']}),
    cssnext,
    precss,
    lol,
    // mymodule,
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});