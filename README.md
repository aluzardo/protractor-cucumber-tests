# protractor-cucumber-tests
Testing Protractor + Cucumber tests

This repository contains code for first steps on protractor [http://www.protractortest.org/#/](http://www.protractortest.org/#/)  and the tutorial [http://www.protractortest.org/#/tutorial](http://www.protractortest.org/#/tutorial)

## Setup

0. Install nodejs brew install node`

1. Install protractor `npm install -g protractor`
2. Try running `protractor --version` to make sure it's working.
3. Install webdriver manager `webdriver-manager update`
4. Start up a server `webdriver-manager start`
5. Try [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub) to make sure Selenium Server is running.

To test using Real Devices

6. Install appium `npm install -g appium`
7. Install client `npm install wd`
8. Run appium server `appium &` or `appium -p 4725` to specify a port

## Configuration

The desktop browser configuration file is [conf.js](conf.js)

The android devices configuration file are [conf-appium-galaxytabmini.js](conf-appium-galaxytabmini.js), [conf-appium-galaxytabs2.js](conf-appium-galaxytabs2.js)

The ios devices configuration file is [conf-appium-ipad4.js](conf-appium-ipad4.js)


## Tests

Tests are inside the folder [features](features/)

The test done using protractor, cucumber and page object.


## Run the test

Run all the test with: `npm test`

Run only test on desktop browsers: `protractor conf.js`

Run only test on real devices: `protractor conf-appium-ipad4.js & protractor conf-appium-galaxytabmini.js & protractor conf-appium-galaxytabs2.js`

Run only test on real android devices: `protractor conf-appium-galaxytabmini.js & protractor conf-appium-galaxytabs2.js`

Run only test on real ios devices: `protractor conf-appium-ipad4.js`

## Links

1. https://github.com/angular/protractor
2. https://github.com/cucumber/cucumber-js
3. https://github.com/appium/appium
4. https://github.com/angular/protractor/blob/master/docs/page-objects.md


