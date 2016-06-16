'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

module.exports = function () {

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    this.Then(/^Add "([^"]*)" \+ "([^"]*)" = "([^"]*)"$/, function (number1, number2, number3, next) {

        add(number1, number2);

        expect(latestResult.getText()).to.eventually.equal(number3);
        next();
    });

    this.Then(/^The history should contain the previous operations$/, function (next) {
        add(1, 2);
        add(3, 4);

        expect(history.count()).to.eventually.equal(2);

        add(5, 6);

        expect(history.count()).to.eventually.equal(3);
        next();
    });

    this.Then(/^The last and the fist operation should match$/, function (next) {

        add(1, 2);
        add(3, 4);

        expect(history.last().getText()).to.eventually.contains('1 + 2');
        expect(history.first().getText()).to.eventually.contains('3 + 4');

        next();
    });
};