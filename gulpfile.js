const gulp = require('gulp');
const del = require('del');

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
    js: [],
};

//TypeScript compile
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
