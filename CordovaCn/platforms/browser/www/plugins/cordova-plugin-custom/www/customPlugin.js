cordova.define("cordova-plugin-custom.customPlugin", function(require, exports, module) { var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');
  
var customPlugin = {};

customPlugin.echo = function(successCallback, errorCallback, args) {
  exec(successCallback, errorCallback, "customPlugin", "echo", args);
};

module.exports = customPlugin;
});
