const gulp = require('gulp');
var gutil = require('gutil');
var argv = require('yargs').argv;
var del = require('del');
var git = require('gulp-git');
var install = require('gulp-install');
var karma = require('karma').Server;
var sequence = require('gulp-sequence')
var webpack = require('webpack');
var webpackConfig = require('./config/webpack.prod.js');

//Add paramteter "--Docker" to build containers after build

//run "gulp commit -m "commit message" to test, build, and check-in to source control all in one step
//      Any failures along the way will be reported to the console and the process will stop

// run "gulp test" to discover and run all unit tests (spec.ts) files and display results
//      This will test the app without building or source control checkin

// run "gulp build" to test and build the application
//      This will not check-in to source control source control checkin

//The remaining tasks are not usually run from the command prompt and used only inside of other tasks

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

gulp.task('commit', function (done) {
    //Don't waist time building if no commit message was passed in
    var commitMessage = argv.m;
    if(commitMessage === undefined) {
         gutil.log('Commit mMessage required: -m "commit message"');
    } else {
         sequence('build', 'git-checkin', 'git-push', done);
        // Missing step git pull before push
    }
});

gulp.task('git-checkin', function (done) {
    var commitMessage = argv.m;
    if(commitMessage === undefined) {
         gutil.log('Commit mMessage required: -m "commit message"');
    } else {
         return gulp.src('.')
            .pipe(git.add())
            .pipe(git.commit(commitMessage));
    }
});

gulp.task('git-push', function (done) {
    git.push('origin', 'dev', function() {
        //Also push to private repository
        git.push('origin', 'dev', { args: "--repo https://paulgilchrist.visualstudio.com/_git/Angular2Template"}, done);
    });
});

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
