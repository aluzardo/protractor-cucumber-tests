'use strict';

var chai              = require('chai');
var chaiAsPromised    = require('chai-as-promised');
var expect            = chai.expect;

chai.use(chaiAsPromised);

module.exports = function () {
    this.Given(/^I go on "([^"]*)"$/, function (url, next) {
        browser.get(url);
        next();
    });

    this.Then(/^The title should be equal "([^"]*)"$/, function (title,next) {
        expect(browser.getTitle()).to.eventually.equal(title);
        next();
    });
};