// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    // loader: 'libs/backbone/loader',
    jQuery: 'libs/jquery/jquery.min',
    Underscore: 'libs/underscore/underscore-min',
    Backbone: 'libs/backbone/backbone',
    templates: '../templates'
  },
  shim: {
    'jQuery': {
      exports: '$'
    },
    'Underscore': {
      exports: '_'
    },
    'Backbone': {
      deps: ['Underscore', 'jQuery'],
      exports: 'Backbone'
    }
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',

  // Some plugins have to be loaded in order due to their non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});