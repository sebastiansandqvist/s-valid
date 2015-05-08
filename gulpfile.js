var gulp = require('gulp');
var mocha = require('gulp-mocha');
var lint = require('gulp-jshint');

// ----- lint s-valid
// ---------------------------------------
gulp.task('lint', function() {
	return gulp.src('src/*.js')
		.pipe(lint('etc/.jshintrc'))
		.pipe(lint.reporter('jshint-stylish'));
});

// ----- unit test after linting
// ---------------------------------------
gulp.task('default', ['lint'], function () {
	return gulp.src('test/*.js', { read: false})
		.pipe(mocha({ reporter: 'spec' }));
});