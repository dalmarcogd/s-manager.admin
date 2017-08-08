/// 
"use strict";

var gulp = require('gulp');
var config = require('./gulp.config')();
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var $ = require('gulp-load-plugins')({ lazy: true });
//const tsc = require("gulp-typescript");
//const sourcemaps = require('gulp-sourcemaps');
//const tsProject = tsc.createProject("tsconfig.json");
//const tslint = require('gulp-tslint');

gulp.task("clean:js", function(cb) {
    //return $.rimraf('dist/js/*.min.js', cb);
    return gulp.src('dist/js/*.min.js', { read: false }).pipe(clean());
});

gulp.task("clean:css", function(cb) {
    //return $.rimraf('dist/css/*.min.css', cb);
    return gulp.src('dist/css/*.min.css', { read: false }).pipe(clean());
});

gulp.task('minify:css', function() {
    return gulp.src(config.css)
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.cssDest));
});

gulp.task("clean", ["clean:js", "clean:css"]);
gulp.task('minify', ['minify:css']);

gulp.task("copy:angular", function() {

    return gulp.src(config.angular, { base: config.node_modules + "@angular/" })
        .pipe(gulp.dest(config.lib + "@angular/"));
});

gulp.task("copy:angularWebApi", function() {
    return gulp.src(config.angularWebApi, { base: config.node_modules })
        .pipe(gulp.dest(config.lib));
});

gulp.task("copy:corejs", function() {
    return gulp.src(config.corejs, { base: config.node_modules })
        .pipe(gulp.dest(config.lib));
});

gulp.task("copy:zonejs", function() {
    return gulp.src(config.zonejs, { base: config.node_modules })
        .pipe(gulp.dest(config.lib));
});

gulp.task("copy:reflectjs", function() {
    return gulp.src(config.reflectjs, { base: config.node_modules })
        .pipe(gulp.dest(config.lib));
});

gulp.task("copy:systemjs", function() {
    return gulp.src(config.systemjs, { base: config.node_modules })
        .pipe(gulp.dest(config.lib));
});

gulp.task("copy:rxjs", function() {
    return gulp.src(config.rxjs, { base: config.node_modules })
        .pipe(gulp.dest(config.lib));
});

gulp.task("copy:app", function() {
    return gulp.src(config.app)
        .pipe(gulp.dest(config.appDest));
});

gulp.task("copy:index", function() {
    return gulp.src(config.index)
        .pipe(gulp.dest(config.indexDest));
});

gulp.task("copy:jasmine", function() {
    return gulp.src(config.jasminejs, { base: config.node_modules + "jasmine-core/lib" })
        .pipe(gulp.dest(config.lib));
});

gulp.task("dependencies", [
    "copy:angular",
    "copy:angularWebApi",
    "copy:corejs",
    "copy:zonejs",
    "copy:reflectjs",
    "copy:systemjs",
    "copy:rxjs",
    "copy:jasmine",
    "copy:app",
    "copy:index"
]);

gulp.task("watch", function() {
    return $.watch(config.app)
        .pipe(gulp.dest(config.appDest));
});

gulp.task("build", ["clean", 'minify', "dependencies"]);

gulp.task('watch-dev', ['build'], function() {

    // start nodemon to auto-reload the dev server
    $.nodemon({ script: 'server.js', ext: 'js', watch: ['dist/'], env: { NODE_ENV: 'development' } })
        .on('change', ['build'])
        .on('restart', function() {
            console.log('[nodemon] restarted dev server');
        });

    // start live-reload server
    $.livereload.listen({ start: true });
});