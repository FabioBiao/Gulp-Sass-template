var gulp = require('gulp');
var sass = require('gulp-sass');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


//scss files compile individual css files
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
});

//script paths
var jsFiles = 'js/**/*.js',
    jsDest = 'dist/scripts';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest));
});

//compile into one main.css file
gulp.task('main-styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css/'))
});

//script with uglify to generate .min
gulp.task('min-scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest(jsDest));
});

//Watch task 
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch(jsFiles,'scripts');
});
