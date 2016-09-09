/// <binding AfterBuild='rebuild' Clean='clean' />
var gulp = require('gulp');
var del = require('del');
var karma = require('karma').Server;
var merge = require('merge2');
var minifyHtml = require('gulp-htmlmin');
var minifyCss = require('gulp-clean-css');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var tsProject = typescript.createProject('./tsconfig.json');

var paths = {
    source: "./src/",
    target: "./build/",
    css: [
        'node_modules/animate.css/animate.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
        'node_modules/dragula/dist/dragula.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.css',
        'node_modules/jquery-confirm/dist/jquery-confirm.min.css',
        'node_modules/toastr/build/toastr.min.css'
    ],
    fonts: [
        'node_modules/bootstrap/fonts/*',
        'node_modules/font-awesome/fonts/*'
    ],
    js: [
        'bower_components/pdfmake/build/pdfmake.min.js',
        'bower_components/pdfmake/build/vfs_fonts.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/d3/d3.min.js',
        'node_modules/dragula/dist/dragula.min.js',
        'node_modules/reflect-metadata/temp/Reflect.js',
        'node_modules/zone.js/dist/zone.min.js',
        'node_modules/zone.js/dist/long-stack-trace-zone.js',
        'node_modules/zone.js/dist/proxy.js',
        'node_modules/zone.js/dist/sync-test.js',
        'node_modules/zone.js/dist/jasmine-patch.js',
        'node_modules/zone.js/dist/async-test.js',
        'node_modules/zone.js/dist/fake-async-test.js',
        'node_modules/systemjs/dist/system.js',

        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
        'node_modules/jasmine-core/lib/jasmine-core/boot.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/jquery-confirm/dist/jquery-confirm.min.js',
        'node_modules/underscore/underscore-min.js',
        'node_modules/toastr/build/toastr.min.js'
    ],
    packages: [
        //'@angular/router-deprecated',
        //'@angular/upgrade',
        //'angular2-in-memory-web-api',
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/testing'
    ]
};

//TypeScript compile
gulp.task('build', function () {
    util.log('Compiling and minifying TypeScript files.  Also building source maps, declarations.');
    return merge(
        gulp.src(paths.source + '*').pipe(gulp.dest(paths.target)),
        gulp.src(paths.source + 'css/**/*').pipe(gulp.dest(paths.target + 'css')),
        gulp.src(paths.source + '**/*.css'),
        gulp.src(paths.source + 'app/**/*.html', { base: paths.source }),
        gulp.src(paths.source + 'app/**/*.ts', { base: paths.source })
            .pipe(sourcemaps.init()) //This means sourcemaps will be generated
            .pipe(typescript(tsProject)) //Compile TypeScript to JavaScript
            .pipe(sourcemaps.write('./')) //Add the sourcemaps to the same folder as the file
    ).pipe(gulp.dest(paths.target))
});

gulp.task('buildProd', function () {
    //Minify and mangle
    return merge(
        gulp.src(paths.source + '*').pipe(gulp.dest(paths.target)),
        gulp.src(paths.source + 'css/**/*').pipe(gulp.dest(paths.target + 'css')),
        gulp.src(paths.source + '**/*.css')
            .pipe(minifyCss()),
        gulp.src(paths.source + 'app/**/*.html', { base: paths.source }),
            //.pipe(minifyHtml({ caseSensitive : true })), //Not working with Angular2
        gulp.src(paths.source + 'app/**/*.ts', { base: paths.source })
            .pipe(typescript(tsProject)) //Compile TypeScript to JavaScript
            .pipe(uglify({ mangle: true })) //Angular2 used to require "mangle: false"
    ).pipe(gulp.dest(paths.target));
});

gulp.task('clean', function () {
    return del.sync([paths.target + '**', '!' + paths.target + 'node_modules/**']);
});

gulp.task('copyFiles', ['clean'], function () {
    gulp.src(paths.source + 'img/**/*').pipe(gulp.dest(paths.target + 'img'));
    gulp.src(paths.css).pipe(gulp.dest(paths.target + 'css'));
    gulp.src(paths.fonts).pipe(gulp.dest(paths.target + 'fonts'));
    gulp.src(paths.js).pipe(gulp.dest(paths.target + 'js'));
    //Packages
    for (var i = 0; i < paths.packages.length; i++) {
        //gulp.src('node_modules/' + paths.packages[i] + '/*.js').pipe(gulp.dest(paths.target + 'js/' + paths.packages[i]));
        gulp.src('node_modules/' + paths.packages[i] + '/bundles/**/*.js').pipe(gulp.dest(paths.target + 'js/' + paths.packages[i] + '/bundles/'));
        //gulp.src('node_modules/' + paths.packages[i] + '/src/**/*.js').pipe(gulp.dest(paths.target + 'js/' + paths.packages[i] + '/src/'));
        //gulp.src('node_modules/' + paths.packages[i] + '/testing/**/*.js').pipe(gulp.dest(paths.target + 'js/' + paths.packages[i] + '/testing/'));
    }
    //Copy rsjx
    gulp.src([
        'node_modules/rxjs/**/*.js',
        '!node_modules/rxjs/src/**/*',
    ]).pipe(gulp.dest(paths.target + 'js/rxjs/'));
    //Copy ng-dragula files
    gulp.src('node_modules/ng2-dragula/src/app/directives/*').pipe(gulp.dest(paths.target + 'app/directives'));
    gulp.src('node_modules/ng2-dragula/src/app/providers/*').pipe(gulp.dest(paths.target + 'app/providers'));
});

gulp.task('rebuild', function () {
    runSequence('copyFiles', 'build');
});

gulp.task('rebuildProd', function () {
    runSequence('copyFiles', 'buildProd');
});

gulp.task('test', ['build'], function (done) {
    // new karma({
    //     configFile: __dirname + '/karma.conf.js',
    //     singleRun: true
    // }, done).start();
});

gulp.task('watch', function () {
    gulp.watch(paths.source + '**/*', ['test']);
});
