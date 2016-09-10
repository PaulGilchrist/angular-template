/// <binding AfterBuild='rebuild' Clean='clean' />
const gulp = require('gulp');
const del = require('del');

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
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/d3/d3.min.js',
        'node_modules/dragula/dist/dragula.min.js',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
        'node_modules/jasmine-core/lib/jasmine-core/boot.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/jquery-confirm/dist/jquery-confirm.min.js',
        'node_modules/underscore/underscore-min.js',
        'node_modules/toastr/build/toastr.min.js'
    ],
};

//TypeScript compile
gulp.task('clean', function () {
    return del.sync([
        paths.target + '**'
        //'!' + paths.target + 'node_modules/**/*'
    ]);
});

gulp.task('copyFiles', ['clean'], function () {
    gulp.src([
        paths.source + '*.*',
        '!' + paths.source + '*.ts'
    ]).pipe(gulp.dest(paths.target));
    gulp.src(paths.source + 'css/*.css').pipe(gulp.dest(paths.target + 'css'));
    //gulp.src(paths.source + 'img\*.img').pipe(gulp.dest(paths.target + 'img')); //Webpack takes care of any static linked images
    gulp.src(paths.css).pipe(gulp.dest(paths.target + 'css'));
    gulp.src(paths.fonts).pipe(gulp.dest(paths.target + 'fonts'));
    //gulp.src(paths.source + 'img/**/*').pipe(gulp.dest(paths.target + 'img'));
    gulp.src(paths.js).pipe(gulp.dest(paths.target + 'js'));
    //Copy ng-dragula files
    //gulp.src('node_modules/ng2-dragula/src/app/directives/*').pipe(gulp.dest(paths.target + 'app/directives'));
    //gulp.src('node_modules/ng2-dragula/src/app/providers/*').pipe(gulp.dest(paths.target + 'app/providers'));
});
