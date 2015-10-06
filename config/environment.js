/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'status-hub-web',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
/*    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;*/
    ENV.APP.API_SERVER_URL = 'http://localhost:8008';
  }
    ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' http://www.google-analytics.com",
    'font-src': "'self' http://fonts.gstatic.com",
    'connect-src': "'self' http://localhost:8008 http://mapststarcsrv3:8008 https://status-hub-api.herokuapp.com",
    'img-src': "'self'",
    'style-src': "'self' http://fonts.googleapis.com",
    'media-src': "'self'",
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.API_SERVER_URL = 'http://status-hub-web.herokuapp.com';
  }

  if (environment === 'production') {

  }

  return ENV;
};
