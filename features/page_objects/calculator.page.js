'use strict';

var CalculatorPage = function() {

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));


    this.get = function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
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