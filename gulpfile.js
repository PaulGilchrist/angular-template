const gulp = require('gulp');
var gutil = require('gutil');
const del = require('del');
var install = require('gulp-install');
var karma = require('karma').Server;
var sequence = require('gulp-sequence')
var webpack = require('webpack');
var webpackConfig = require('./config/webpack.prod.js');

var paths = {
    source: "./src/",
    target: "./build/",
    css: [
        'node_modules/font-awesome/css/font-awesome.min.css',
    ],
    fonts: [
        'node_modules/bootstrap/fonts/*',
        'node_modules/font-awesome/fonts/*'
    ],
    js: [
        'node_modules/jquery/dist/jquery.min.js',
    ],
};

gulp.task('build', function (done) {
  sequence('test', ['copyFiles', 'pack'], 'packageInstall', done);
})

gulp.task('clean', function () {
    return del.sync([paths.target + '**']);
});

gulp.task('copyRoot', function () {
    return gulp.src([paths.source + '*.*', '!' + paths.source + '*.ts']).pipe(gulp.dest(paths.target));
});

gulp.task('copyAppCss', function () {
    return gulp.src(paths.source + 'css/*.css').pipe(gulp.dest(paths.target + 'css'));
});

gulp.task('copyVendorCss', function () {
    return gulp.src(paths.source + 'css/*.css').pipe(gulp.dest(paths.target + 'css'));
});

gulp.task('copyVendorFonts', function () {
    return gulp.src(paths.fonts).pipe(gulp.dest(paths.target + 'fonts'));
});

gulp.task('copyVendorJs', function () {
    return gulp.src(paths.js).pipe(gulp.dest(paths.target + 'js'));
});

gulp.task('copyFiles', function (done) {
      sequence('clean', ['copyRoot', 'copyAppCss', 'copyVendorCss', 'copyVendorFonts', 'copyVendorJs'], done);
});

gulp.task('pack', function(done) {
   return webpack(webpackConfig, function(err, stats) {
       if(err || (stats.compilation.errors && stats.compilation.errors.length)) {
            gutil.log('[webpack] Error\n' + stats.compilation.errors);
       } else {
            gutil.log('[webpack] Completed\n' + stats.toString({
                assets: true,
                chunks: false,
                chunkModules: false,
                colors: true,
                hash: false,
                timings: false,
                version: false
            }));
            done();
       }
    });
});

gulp.task('packageInstall', function() {
    return gulp.src([paths.target + 'package.json']).pipe(install());
});

// Run test once and exit
gulp.task('test', function (done) {
    return karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function(err) {
        if (err) {
            //No need to log the error as Karma will have already logged it
        } else {
            done();
        }
    });
});
