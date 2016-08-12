'use strict';

var AngularJsSteps = function () {

    this.World = require("../support/world.js").World;

    var AngularJsPage = require('../page_objects/angularjs.page');
    var angularJsPage;
    

    this.Before(function () {
        angularJsPage = new AngularJsPage();
    });

    this.Given(/^The AngularJS website is open$/, function (callback) {
        angularJsPage.get();
        callback();
    });

    this.Then(/^I should be able to add a todo$/, function (next) {
        angularJsPage.setTodoText('write first protractor test');
        angularJsPage.clickAddTodo();

        var todoList = angularJsPage.getTodoList();

        this.expect(todoList.count()).to.eventually.equal(3);
        this.expect(todoList.get(2).getText()).to.eventually.equal('write first protractor test');

        todoList.get(2).element(by.css('input')).click();

        this.expect(angularJsPage.getCompleteAmount().count()).to.eventually.equal(2).and.notify(next);
    });
};

module.exports = AngularJsSteps;