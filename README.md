# [gulp](http://gulpjs.com)-task-list

gulp-task-list is a [gulp](http://gulpjs.com) task that lists all tasks in gulpfile.js along with their comments and dependencies.

Comments are the single line of comment text immediately before the `gulp.task` call.
Only tasks defined by a direct call to `gulp.task` with the task name a litteral string, will have their documentation shown.

This is still in need of major improvement ... if you choose to use it, good luck and send me your pull requests!

[`gulp-showhelp`](https://github.com/sttk/gulp-showhelp) is a better implementation of this kind of functionality, the only down side is that it doesn't list the dependencies.

## Usage

```javascript

		var gulp = require('gulp');

		require('gulp-task-list')(gulp);

		// this is a simple task
		gulp.task('dummy', function() {
				console.log('this is dummy');
		});

		// also simple, but with a dependency
		gulp.task('smarty', ['dummy'], function() {
				console.log('smarty\'s pants?');
		});
```

### Results

		$ gulp task-list

		Task Name    Description                               Dependencies
		dummy        this is a simple task
		smarty       now, this one is the second dummy task    some-task
