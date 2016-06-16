'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

module.exports = function () {

    this.Then(/^I should be able to add a todo$/, function (next) {
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).to.eventually.equal(3);
        expect(todoList.get(2).getText()).to.eventually.equal('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).to.eventually.equal(2);
        next();
    });
};