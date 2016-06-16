'use strict';

var AngularJsPage = function() {

    var todoText = element(by.model('todoList.todoText'));
    var todoButton= element(by.css('[value="add"]'));
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    var completedAmount = element.all(by.css('.done-true'));


    this.get = function() {
        browser.get('https://angularjs.org');
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