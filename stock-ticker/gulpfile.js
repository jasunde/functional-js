var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('jasmine-phantom', function () {
  return gulp.src(['src/**/*.js', 'spec/**/*Spec.js'])
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless());
});

gulp.task('default', ['jasmine-phantom']);
