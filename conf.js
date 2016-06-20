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

    seleniumAddress: 'http://localhost:4444/wd/hub',
    // TODO Find a way to mix browsers and appium devices
    // seleniumAddress: 'http://localhost:4723/wd/hub',
    specs: ['features/*.feature'],
    multiCapabilities: [
        {
            browserName: 'firefox'
        },
        /* TODO Safari is randomly failing (necessary restart safari and selenium server)
         {
         browserName: 'safari'
         },*/
        {
            browserName: 'chrome'
        }, {
            browserName: 'chrome',
            // List of devices https://cs.chromium.org/chromium/src/chrome/test/chromedriver/chrome/mobile_device_list.cc
            'deviceName': 'Google Nexus 5'
        }, {
            browserName: 'chrome',
            'deviceName': 'Apple iPhone 6'
        }, {
            browserName: 'chrome',
            'deviceName': 'Apple iPad'
        }, {
            browserName: 'chrome',
            'deviceName': 'Samsung Galaxy S4'
        }
        // TODO Find a way to mix browsers and appium devices
        /*,  {
         platformName: 'iOS',
         platformVersion: '9.1',
         browserName: '',
         app: 'safari',
         deviceName: 'Mavrix Test iPad Mini',
         'appium-version': "1.5.3",
         "forceIpad": true,


         },
         {
         browserName: 'chrome',
         'appium-version': '1.5.3',
         platformName: 'Android',
         platformVersion: '6.0.1',
         deviceName: '0084db084cced0d1'
         }
         {
         browserName: 'chrome',
         'appium-version': '1.5.3',
         platformName: 'Android',
         platformVersion: '4.2.2',
         deviceName: '30048664b980c100'
         },
         {
         browserName: 'chrome',
         'appium-version': '1.5.3',
         platformName: 'Android',
         platformVersion: '5.0.2',
         deviceName: '33005bd56ac6c223'
         }*/
    ]
};