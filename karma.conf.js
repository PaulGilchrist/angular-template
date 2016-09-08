module.exports = function(config) {

  var appBase   = 'app/'; // transpiled app JS files
  var appAssets ='/base/app/'; // component assets fetched by Angular's compiler

  config.set({
    basePath: 'build',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-htmlfile-reporter')
    ],
    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      // System.js for module loading
      'js/system.src.js',
      // Polyfills
      'js/shim.min.js',
      // Reflect and Zone.js
      'js/Reflect.js',
      'js/zone.min.js',
      'js/long-stack-trace-zone.js',
      'js/proxy.js',
      'js/sync-test.js',
      'js/jasmine-patch.js',
      'js/async-test.js',
      'js/fake-async-test.js',
      //App specific patterns
      {pattern: 'js/jquery.min.js', included: true, watched: false},
      {pattern: 'js/jquery-confirm.min.js', included: true, watched: false},
      {pattern: 'js/bootstrap.min.js', included: true, watched: false},
      {pattern: 'js/underscore-min.js', included: true, watched: false},
      {pattern: 'js/toastr.min.js', included: true, watched: false},
      {pattern: 'js/d3.min.js', included: true, watched: false},
      {pattern: 'js/dragula.min.js', included: true, watched: false},
      {pattern: 'js/pdfmake.min.js', included: true, watched: false},
      {pattern: 'js/vfs_fonts.js', included: true, watched: false},
      // RxJs.
      {pattern: 'js/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'js/rxjs/**/*.js.map', included: false, watched: false},
      // Angular 2 itself and the testing library
      {pattern: 'js/@angular/**/*.js', included: false, watched: false},
      {pattern: 'js/@angular/**/*.js.map', included: false, watched: false},
      {pattern: 'systemjs.config.js', included: false, watched: false},
      'karma-test-shim.js',
      // transpiled application & spec code paths loaded via module imports
      {pattern: appBase + '**/*.js', included: false, watched: true},
      // asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: appBase + '**/*.html', included: false, watched: true},
      {pattern: appBase + '**/*.css', included: false, watched: true},
      // paths for debugging with source maps in dev tools
      {pattern: appBase + '**/*.ts', included: false, watched: false},
      {pattern: appBase + '**/*.js.map', included: false, watched: false}
    ],
    // proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      "/app/": appAssets
    },
    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'html'],
    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
