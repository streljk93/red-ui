const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync');
const concat      = require('gulp-concat');
const sourcemaps  = require('gulp-sourcemaps');
const babel       = require('gulp-babel');
const del         = require('del');
const imagemin    = require('gulp-imagemin');
const pngquant    = require('imagemin-pngquant');
const cache       = require('gulp-cache');

gulp.task('sass', function() {
  return gulp.src('app/components/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app',
		},
		notify: false,
	});
});

gulp.task('jsLib', function() {
	return gulp.src([
			'node_modules/moment/min/moment.min.js',
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/popper.js/dist/umd/popper.min.js',
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'node_modules/slick-carousel/slick/slick.min.js',
			'node_modules/angular/angular.min.js',

			// bem blocks
			'app/components/blocks/**/*.js',

			// APP ANGULAR
			// application
			'app/js/app.js',

			// config
			'app/js/shared/config/config.js',

			// services
			'app/js/shared/services/promotions.js',

			// directives
			'app/js/shared/directives/slick.js',
			
			// controllers
			'app/js/components/promotions/controller.js',

		])
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat('libs.min.js'))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browser-sync', 'sass', 'jsLib'], function() {
	gulp.watch('app/components/**/*.+(scss|sass)', ['sass']);

	gulp.watch('app/components/**/*.js', ['jsLib']);
	gulp.watch('app/js/app.js', ['jsLib']);
	gulp.watch('app/js/components/**/*.js', ['jsLib']);
	gulp.watch('app/js/shared/**/*.js', ['jsLib']);

	gulp.watch('app/index.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('img', function() {
  return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'sass', 'jsLib'], function() {
	var buildCss = gulp.src([
			'app/css/main.css',
		])
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);

gulp.task('clear', function () {
  return cache.clearAll();
});