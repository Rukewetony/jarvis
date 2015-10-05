// Requirements
var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
prefix = require('gulp-autoprefixer'),
browserSync = require('browser-sync').create();
;

// compiles scss
gulp.task('sass-to-css', function(){
	return gulp.src('app.scss')
	.pipe(prefix("last 3 versions"))
	.pipe(gulp.dest('./'))
	.pipe(browserSync.stream());
	});

// Livereloads the client
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
		});
	});



gulp.task('default', function() {
	gulp.watch('*.scss, *.html, *.js', function(){
		gulp.run('sass-to-css');
		gulp.run('browser-sync');
		});
	});