const gulp = require('gulp');
const del = require('del');
var gutil = require('gutil');
var install = require('gulp-install');
var karma = require('karma').Server;
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

gulp.task('build', ['webpack'], function() {
    return gulp.src([paths.target + 'package.json'])
      .pipe(install());
});


gulp.task('webpack', ['copyFiles', 'test'], function(done) {
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

gulp.task('clean', function () {
    return del.sync([
        paths.target + '**'
    ]);
});

gulp.task('copyFiles', ['clean'], function () {
    gulp.src([
        paths.source + '*.*',
        '!' + paths.source + '*.ts'
    ]).pipe(gulp.dest(paths.target));
    gulp.src(paths.source + 'css/*.css').pipe(gulp.dest(paths.target + 'css'));
    gulp.src(paths.css).pipe(gulp.dest(paths.target + 'css'));
    gulp.src(paths.fonts).pipe(gulp.dest(paths.target + 'fonts'));
    //gulp.src(paths.source + 'img/**/*').pipe(gulp.dest(paths.target + 'img')); //Webpack takes care of any static linked images
    gulp.src(paths.js).pipe(gulp.dest(paths.target + 'js'));
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
