// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

// // Cancel Karma's synchronous start,
// // we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
    packages: {
        'base/app': {
            defaultExtension: 'js',
            format: 'cjs',
            map: Object.keys(window.__karma__.files).filter(onlyAppFiles).reduce(createPathRecords, {})
        }
    }
});

System.import('angular2/src/platform/browser/browser_adapter')
    .then(function(browser_adapter) { browser_adapter.BrowserDomAdapter.makeCurrent(); })
    .then(function() { return Promise.all(resolveTestFiles()); })
    .then(function() { __karma__.start(); }, function(error) { __karma__.error(error.stack || error); });

function createPathRecords(pathsMapping, appPath) {
    // creates local module name mapping to global path with karma's fingerprint in path, e.g.:
    // './app/app.controller':
    // '/wwwroot/app/app.controller.js?f4523daf879cfb7310ef6242682ccf10b2041b3e'
    var pathParts = appPath.split('/');
    var moduleName = './' + pathParts.slice(Math.max(pathParts.length - 2, 1)).join('/');
    moduleName = moduleName.replace(/\.js$/, '');
    pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
    return pathsMapping;
}

function onlyAppFiles(path) {
    //return /\/wwwroot\/app\/(?!.*\.spec\.js$).*\.js$/.test(path);
    return /app\/(?!.*\.spec\.js$).*\.js$/.test(path);
}

function onlySpecFiles(path) {
    return /\.spec\.js$/.test(path);
}

function resolveTestFiles() {
    return Object.keys(window.__karma__.files)  // All files served by Karma.
        .filter(onlySpecFiles)
        .map(function (moduleName) {
            // loads all spec files via their global module names (e.g.
            // 'wwwroot/app/app.controller.spec')
            return System.import(moduleName);
        });
}
