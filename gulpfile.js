// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var csslint = require('gulp-csslint');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
 
gulp.task('lintcss', function() {
  gulp.src('src/css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

// Lint Task
gulp.task('lintjs', function() {
	return gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile Our Less
gulp.task('less', function() {
	gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('src/css'));
	return gulp.src('src/css/*.css')
			.pipe(concat('all.css'))
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(gulp.dest('assets/css'));
});

//Minify Images
gulp.task('img', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('assets/img'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('assets/js'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});

//Wiredep
gulp.task('wiredep',function(){
	return require('wiredep')({ src: 'index.html' });
})

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['lint', 'scripts']);
	gulp.watch('src/less/*.less', ['less']);
});

// Default Task
gulp.task('default', ['lintjs', 'lintcss', 'less', 'scripts', 'img']);
// Build All
gulp.task('build', ['default']);