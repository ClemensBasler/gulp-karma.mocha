var gulp = require('gulp');
var Server = require('karma').Server;
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');

gulp.task('test-frontend', function(done) {
  new Server({
    configFile: __dirname + '/frontend/karma.conf.js'
  }, done()).start();
});

gulp.task('test-backend', function () {
    return gulp.src('backend/test/test.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha());
});

gulp.task('default', function(done) {
  runSequence('test-backend', 'test-frontend');
  done();
});
