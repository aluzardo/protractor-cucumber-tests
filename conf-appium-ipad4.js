// Step 3 protractor tutorial http://www.protractortest.org/#/tutorial#step-3-changing-the-configuration
exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // relevant cucumber command line options
    cucumberOpts: {
        require: 'features/step_definitions/*.step.js',
        format: "pretty"
    },

    seleniumAddress: 'http://localhost:4725/wd/hub',
    specs: ['features/*.feature'],
    capabilities: {
        browserName: 'safari',
        bundleId:'SafariLauncher',
        'appium-version': '1.5.3',
        platformName: 'iOS',
        deviceName: 'Mavrix Test iPad4',
        'udid': '39d39a8bf0d6635268e5997dae574c04246f5e2b'

    }
};


