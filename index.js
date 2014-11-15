'use strict';

var fs = require('graceful-fs'); // use just like fs
var gutil = require('gulp-util');
var clitable = require('cli-table');

module.exports = function(gulp) {
	gulp.task('task-list', function() {
		var gulpfile = fs.readFileSync('gulpfile.js').toString();
		console.log(gulpfile);
    console.log(gulp.tasks);
		var table = new clitable({
				head: ['Task Name', 'Description', 'Dependencies'],
				chars: {
					'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': '',
					'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': '',
					'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': '',
					'right': '' , 'right-mid': '' , 'middle': ' '
				}
			});
		var start, end, comment, deps;
		for (var gulptask in gulp.tasks) {
			if (gulp.tasks.hasOwnProperty(gulptask)) {
				if (gulptask == 'task-list') {
					continue;
				}
				start = gulpfile.lastIndexOf("//", gulpfile.indexOf(gulptask));
				end = gulpfile.indexOf('\n', start);
				console.log(gulptask, start, end, gulpfile.indexOf(gulptask), gulptask);
				if (start !== -1 && end !== -1) {
					start += 2;
					comment = gulpfile.substring(start, end);
				} else {
					comment = "";
				}
				deps = gulp.tasks[gulptask].dep.join(", ");

				table.push([gulptask, comment, deps]);
			}
		}

		console.log(table.toString());
	});
};
