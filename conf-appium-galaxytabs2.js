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

    seleniumAddress: 'http://localhost:4723/wd/hub',
    specs: ['features/*.feature'],
    capabilities: {
        browserName: 'chrome',
        'appium-version': '1.5.3',
        platformName: 'Android',
        deviceName: 'XXX'
    }
};