/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'dragula':                    'js/dragula.min.js',
    'rxjs':                       'js/rxjs',
    //'angular2-in-memory-web-api': 'js/angular2-in-memory-web-api',
    '@angular':                   'js/@angular'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
	  //'router-deprecated',
	  //'upgrade',
      'common',
	  'compiler',
	  'core',
	  'forms',
	  'http',
	  'platform-browser',
	  'platform-browser-dynamic',
	  'router'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    //packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);



