const appInsights = require("applicationinsights");
appInsights.setup().start();
appInsights.defaultClient.config.disableAppInsights = false;

let client = appInsights.defaultClient;
var d = new Date();

client.trackEvent({name: "test-message generated at " + d.toISOString()});

var app = require('./server/server.js');

app.start();
