/* someday this maybe should be tests ... */
var gulp = require('gulp');

//require('gulp-task-list')(gulp);
require('../index.js')(gulp);

// This is a comment
gulp.task('alpha', function() {
	console.log('ONE');
});

// This line won't be included ...
// Only this line will be in the comment
gulp.task('beta', function() {
	console.log('TWO');
});

/* This _isn't_ a comment! */
gulp.task('gamma', ['alpha', 'beta'], function() {
	console.log('THREE gulp-y tasks ... AH! AH! AH!');
});

var mytask = 'my-task';
// You'll never see this comment!
gulp.task(mytask, function() {
	console.log('shh...');
});
