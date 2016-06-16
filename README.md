# protractor-cucumber-tests
Testing Protractor + Cucumber tests

This repository contains code for first steps on protractor [http://www.protractortest.org/#/](http://www.protractortest.org/#/)  and the tutorial [http://www.protractortest.org/#/tutorial](http://www.protractortest.org/#/tutorial)

## Setup

1. Install protractor `npm install -g protractor`
2. Try running `protractor --version` to make sure it's working.
3. Install webdriver manager `webdriver-manager update`
4. Start up a server `webdriver-manager start`
5. Try [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub) to make sure Selenium Server is running.

## Configuration

The configuration file is [conf.js](conf.js)

## Tests

Tests are inside the folder [specs](specs/)

## Run the test

Run the test with: `npm test`
