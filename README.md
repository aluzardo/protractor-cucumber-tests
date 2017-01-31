# protractor-cucumber-tests
Testing Protractor + Cucumber tests [![Build Status](https://travis-ci.org/aluzardo/protractor-cucumber-tests.svg?branch=master)](https://travis-ci.org/aluzardo/protractor-cucumber-tests)

This repository contains code for first steps on protractor [http://www.protractortest.org/#/](http://www.protractortest.org/#/)  and the tutorial [http://www.protractortest.org/#/tutorial](http://www.protractortest.org/#/tutorial)

## Setup

0. Install nodejs `brew install node`
1. Intall yarn  `brew install yarn`
2. Install modules `yarn install`
3. Run all servers `yarn run start-servers`

## Configuration

The desktop browser configuration file is [conf.js](conf.js)

The android devices configuration file are [conf-appium-galaxytabmini.js](conf-appium-galaxytabmini.js), [conf-appium-galaxytabs2.js](conf-appium-galaxytabs2.js)

The ios devices configuration file is [conf-appium-ipad4.js](conf-appium-ipad4.js)


## Tests

Tests are inside the folder [features](features/)

The test done using protractor, cucumber and page object.


## Run the test

Run all the test with: `yarn test`

Run only test on desktop browsers: `yarn run test-desktop`

Run only test on real devices: `yarn run test-real-devices`

Run only test on real android devices: `yarn run test-android`

Run only test on real ios devices: `yarn run test-ios`

The test can be tagged as:

- critical - core functionality
- high - important to be fixed
- low - nice but can wait to be fixed

Only the critical test will be run if you use the previous commands. 

If you want to run high or low test you need use this command at the end:


`-- --cucumberOpts.tags @tag` Replace @tag for the tag.

For example: `npm test -- --cucumberOpts.tags @low`

## Links

1. https://github.com/angular/protractor
2. https://github.com/cucumber/cucumber-js
3. https://github.com/appium/appium
4. https://github.com/angular/protractor/blob/master/docs/page-objects.md


