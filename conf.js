var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumPort: 4444,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 5
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['test/scripts/TS001.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000
  },
  allScriptsTimeout: 4000,
  getPageTimeout: 5000,
  onPrepare: function() {
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: './testReports/reports/',
        screenshotsFolder: 'images',     
                     
      }));
   }
};