'use strict';

var UtilSteps  = function () {

    this.World = require("../support/world.js").World;
    
    this.Given(/^I go on "([^"]*)"$/, function (url, next) {
        browser.get(url);
        next();
    });

    this.Then(/^The title should be equal "([^"]*)"$/, function (title,next) {
        this.expect(browser.getTitle()).to.eventually.equal(title).and.notify(next);
        next();
    });
};

module.exports = UtilSteps;