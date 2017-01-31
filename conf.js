// Step 3 protractor tutorial http://www.protractortest.org/#/tutorial#step-3-changing-the-configuration
exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // relevant cucumber command line options
    cucumberOpts: {
        require: ['features/step_definitions/*.step.js', 'features/support/*.js'],
        format: "pretty",
        tags:  "@critical"
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['features/*.feature'],
    multiCapabilities: [
        {
            browserName: 'firefox'
        }/*,
         {
         browserName: 'safari'
         },
         {
            browserName: 'chrome'
        },
        {
            browserName: 'chrome',
            // List of devices https://cs.chromium.org/chromium/src/chrome/test/chromedriver/chrome/mobile_device_list.cc
            'deviceName': 'Google Nexus 5'
        },
        {
            browserName: 'chrome',
            'deviceName': 'Apple iPhone 6'
        },
        {
            browserName: 'chrome',
            'deviceName': 'Apple iPad'
        },
        {
            browserName: 'chrome',
            'deviceName': 'Samsung Galaxy S4'
        }*/
    ],
    maxSessions: 1,
    resultJsonOutputFile: 'reports/' + Date.now() + '-protractor-report.json'
};