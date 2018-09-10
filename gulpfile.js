var gulp = require('gulp');
var postcss = require('gulp-postcss');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
	return gulp.src('./assets/precss/main.css').pipe(
		postcss([
      		require('postcss-cssnext')({
				features: {
					autoprefixer: false
				  }
			  }),
			require('postcss-responsive-type'),
			require('postcss-pxtorem')({
				propList: ['*'],
				selectorBlackList: ['letter-spacing']
			}),
			require('postcss-data-uri'),
			require('autoprefixer')({ grid: true, browsers: ["last 2 versions", "ie 9-11", "iOS 7"] }),
			require('cssnano')({preset: 'default'})
		]))
		.pipe(gulp.dest('./assets/css/'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function () {
	browserSync.init({
		server: "./",
		port: 8080
	});
	gulp.watch('./assets/precss/main.css', ['css']);
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
