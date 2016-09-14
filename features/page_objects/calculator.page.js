'use strict';

var CalculatorPage = function() {

    var json = require('../json/calculator.json');

    var firstNumber = element(by.model(json.locators.firstNumber.model));
    var secondNumber = element(by.model(json.locators.secondNumber.model));
    var goButton = element(by.id(json.locators.goButton.id));
    var latestResult = element(by.binding(json.locators.latestResult.binding));
    var history = element.all(by.repeater(json.locators.history.repeater));


    this.get = function() {
        browser.get(json.siteURL);
    };

    this.add = function(numberA, numberB) {
        firstNumber.sendKeys(numberA);
        secondNumber.sendKeys(numberB);
        goButton.click();
    };

    this.getLatestResult = function(){
        return latestResult;
    };

    this.getHistory = function() {
        return history;
    };

};

module.exports = CalculatorPage;