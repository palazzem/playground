/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Additional libraries
app.import('bower_components/picnic/releases/v2.min.css');

module.exports = app.toTree();
