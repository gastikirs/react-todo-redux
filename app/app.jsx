import React from 'react'; //equals to var.. require
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<div>
		<TodoApp/>
	</div>,
  document.getElementById('app')
);