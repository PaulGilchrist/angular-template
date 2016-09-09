/**
 * System configuration for Angular 2
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'js/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
            // angular testing umd bundles
            '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
            '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
            '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
            '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
            '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
            '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
            '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
            '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd.js',
            // other
            'dragula': 'npm:dragula.min.js',
            'rxjs': 'npm:rxjs',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            'app':                        { main: './main.js',  defaultExtension: 'js' },
            'rxjs':                       { defaultExtension: 'js' },
            //'angular2-in-memory-web-api': { defaultExtension: 'js' },
        }
    });
})(this);



