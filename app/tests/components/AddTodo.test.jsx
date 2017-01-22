var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call onAddTodo when valid text entered', () => {
		//Creo el espia
		var spy = expect.createSpy();

		var AddTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);

		var $el = $(ReactDOM.findDOMNode(AddTodoForm));
		AddTodoForm.refs.todoText.value = 'test';

		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith('test');
	});

	it('should not call onAddTodo when invalid text entered', () => {
		//Creo el espia
		var spy = expect.createSpy();

		var AddTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);

		var $el = $(ReactDOM.findDOMNode(AddTodoForm));
		AddTodoForm.refs.todoText.value = '';

		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});