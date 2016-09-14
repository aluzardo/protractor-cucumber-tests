'use strict';

var AngularJsPage = function() {

    var json = require('../json/angularjs.json');

    var todoText = element(by.model(json.locators.todoText.model));
    var todoButton= element(by.css(json.locators.todoButton.css));
    var todoList = element.all(by.repeater(json.locators.todoList.repeater));
    var completedAmount = element.all(by.css(json.locators.completedAmount.css));


    this.get = function() {
        browser.get(json.siteURL);
    };

    this.setTodoText = function(text) {
        todoText.sendKeys(text);
    };

    this.clickAddTodo = function() {
        todoButton.click();
    };

    this.getTodoList = function(){
        return todoList;
    };

    this.getCompleteAmount = function() {
        return completedAmount;
    };

};

module.exports = AngularJsPage;