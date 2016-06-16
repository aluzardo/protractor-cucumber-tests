'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

var CalculatorPage = require('../page_objects/calculator.page');

module.exports = function () {

    var calculatorPage;

    this.Before(function () {
        calculatorPage = new CalculatorPage();
    });

    this.Then(/^Add "([^"]*)" \+ "([^"]*)" = "([^"]*)"$/, function (number1, number2, number3, next) {
        calculatorPage.add(number1, number2);

        expect(calculatorPage.getLatestResult().getText()).to.eventually.equal(number3);
        next();
    });

    this.Then(/^The history should contain the previous operations$/, function (next) {
        calculatorPage.add(1, 2);
        calculatorPage.add(3, 4);
        var history = calculatorPage.getHistory();
        expect(history.count()).to.eventually.equal(2);

        calculatorPage.add(5, 6);

        expect(history.count()).to.eventually.equal(3);
        next();
    });

    this.Then(/^The last and the fist operation should match$/, function (next) {
        calculatorPage.add(1, 2);
        calculatorPage.add(3, 4);
        
        var history = calculatorPage.getHistory();
        expect(history.last().getText()).to.eventually.contains('1 + 2');
        expect(history.first().getText()).to.eventually.contains('3 + 4');

        next();
    });
   
};