'use strict';

var CalculatorSteps = function () {

    this.World = require("../support/world.js").World;

    var CalculatorPage = require('../page_objects/calculator.page');
    var calculatorPage;

    this.Before(function () {
        calculatorPage = new CalculatorPage();
    });

    this.Given(/^The Calculator is open$/, function (callback) {
        calculatorPage.get();
        callback();
    });

    this.Then(/^Add "([^"]*)" \+ "([^"]*)" = "([^"]*)"$/, function (number1, number2, number3, next) {
        calculatorPage.add(number1, number2);

        this.expect(calculatorPage.getLatestResult().getText()).to.eventually.equal(number3).and.notify(next);
    });

    this.Then(/^The history should contain the previous operations$/, function (next) {
        calculatorPage.add(1, 2);
        calculatorPage.add(3, 4);
        var history = calculatorPage.getHistory();
        this.expect(history.count()).to.eventually.equal(2).and.notify(next);

        calculatorPage.add(5, 6);

        this.expect(history.count()).to.eventually.equal(3).and.notify(next);
    });

    this.Then(/^The last and the fist operation should match$/, function (next) {
        calculatorPage.add(1, 2);
        calculatorPage.add(3, 4);
        
        var history = calculatorPage.getHistory();
        this.expect(history.last().getText()).to.eventually.contains('1 + 2').and.notify(next);
        this.expect(history.first().getText()).to.eventually.contains('3 + 4').and.notify(next);

    });
   
};

module.exports = CalculatorSteps;