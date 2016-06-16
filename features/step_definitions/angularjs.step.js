'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

var AngularJsPage = require('../page_objects/angularjs.page');

module.exports = function () {

    var angularJsPage;

    this.Before(function () {
        angularJsPage = new AngularJsPage();
    });

    this.Then(/^I should be able to add a todo$/, function (next) {
        angularJsPage.setTodoText('write first protractor test');
        angularJsPage.clickAddTodo();

        var todoList = angularJsPage.getTodoList();

        expect(todoList.count()).to.eventually.equal(3);
        expect(todoList.get(2).getText()).to.eventually.equal('write first protractor test');

        todoList.get(2).element(by.css('input')).click();

        expect(angularJsPage.getCompleteAmount().count()).to.eventually.equal(2);
        next();
    });
};