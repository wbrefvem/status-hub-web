/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/bootswatch-dist/js/bootstrap.js');
  app.import('bower_components/bootswatch-dist/css/bootstrap.css');
  app.import('bower_components/moment/moment.js');
  app.import('bower_components/jquery/dist/jquery.min.js');
  app.import('bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js');
  app.import('bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');
  app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts'
  });
  app.import('bower_components/bootswatch-dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });
  app.import('bower_components/bootswatch-dist/fonts/glyphicons-halflings-regular.woff2', {
    destDir: 'fonts'
  });
  app.import('bower_components/spinkit/css/spinkit.css');
  return app.toTree();
};
