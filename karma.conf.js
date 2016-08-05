module.exports = function(config) {
    config.set({
        basePath: './wwwroot',
        frameworks: ['jasmine'],
        files: [
            // paths loaded by Karma
            {pattern: 'js/es6-shim.min.js', included: true, watched: false},
            {pattern: 'js/zone.min.js', included: true, watched: false},
            {pattern: 'js/Reflect.js', included: true, watched: false},
            {pattern: 'js/system.src.js', included: true, watched: false},
            {pattern: 'systemjs.config.js', included: true, watched: false},
            {pattern: '../karma-test-shim.js', included: true, watched: false},
            {pattern: 'js/jquery.min.js', included: true, watched: false},
            {pattern: 'js/jquery-confirm.min.js', included: true, watched: false},
            {pattern: 'js/bootstrap.min.js', included: true, watched: false},
            {pattern: 'js/underscore-min.js', included: true, watched: false},
            {pattern: 'js/toastr.min.js', included: true, watched: false},
            {pattern: 'js/d3.min.js', included: true, watched: false},
            {pattern: 'js/dragula.min.js', included: true, watched: false},
            {pattern: 'js/pdfmake.min.js', included: true, watched: false},
            {pattern: 'js/vfs_fonts.js', included: true, watched: false},
            // paths loaded via module imports
            {pattern: 'app/**/*.js', included: false, watched: true},
            // paths to support debugging with source maps in dev tools
            {pattern: 'app/**/*.ts', included: false, watched: false},
            {pattern: 'app/**/*.js.map', included: false, watched: false}
        ],
        // list of files to exclude
        exclude: [
        ],
        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/app/': '/base/app/'
        },
        // web server port
        port: 9876,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome', 'Firefox'],
        browsers: ['Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
        ],
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            //'dist/**/!(*spec).js': ['coverage']
        },
        singleRun: true,
        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
