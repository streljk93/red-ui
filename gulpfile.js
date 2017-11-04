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
  return gulp.src('app/assets/components/sass/main.sass')
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
			// 'app/assets/libs/'
		])
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat('libs.min.js'))
		.pipe(sourcempas.write("."))
		.pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browser-sync', 'sass', 'jsLib'], function() {
	gulp.watch('app/assets/components/**/*.+(scss|sass)', ['sass']);
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