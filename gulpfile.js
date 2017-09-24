var gulp = require('gulp');
var postcss = require('gulp-postcss');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
	return gulp.src('./assets/precss/style.css').pipe(
		postcss([
      require('postcss-cssnext')(),
			require('postcss-responsive-type'),
			require('postcss-pxtorem')({
				propList: ['*'],
				selectorBlackList: ['letter-spacing']
			})
		]))
		.pipe(gulp.dest('./assets/css/'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function () {
	browserSync.init({
		server: "./"
	});
	gulp.watch('./assets/precss/style.css', ['css']);
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
